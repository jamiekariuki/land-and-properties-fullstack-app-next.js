import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { connectToDB } from "./db.connect";
import { User } from "./models/users";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (err) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			if (account.provider === "google") {
				connectToDB();

				try {
					const user = await User.findOne({ email: profile.email });

					if (!user) {
						const newUser = new User({
							email: profile.email,
							image: profile.picture,
						});

						await newUser.save();
					}
				} catch (err) {
					console.log(err);
					return false;
				}
			}
			return true;
		},
		...authConfig.callbacks,
	},
});

//login function
const login = async (credentials) => {
	try {
		connectToDB();
		const user = await User.findOne({ email: credentials.email });

		if (!user) throw new Error("User does not exist");

		if (!user.password) throw new Error("Provide a password");

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		if (!isPasswordCorrect) throw new Error("Wrong credentials!");

		return user;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to login!");
	}
};
