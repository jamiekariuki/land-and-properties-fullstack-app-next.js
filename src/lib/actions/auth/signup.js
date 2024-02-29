"use server";

import { signIn } from "@/lib/auth";
import { connectToDB } from "@/lib/db.connect";
import { User } from "@/lib/models/users";
import { AuthSchema } from "@/utils/validators/authentication/auth.schema";
import bcrypt from "bcryptjs";

export const AuthSignUp = async (data) => {
	try {
		await AuthSchema.validate(data);
	} catch {
		return { error: "Invalid fields!" };
	}

	const { email, password } = data;

	try {
		connectToDB();

		const user = await User.findOne({ email });

		if (user) {
			return { error: "Username already exists" };
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			email,
			password: hashedPassword,
		});

		await newUser.save();

		try {
			await signIn("credentials", { email, password });
		} catch (err) {
			// console.log(err);
			if (err.message.includes("CredentialsSignin")) {
				return { error: "Invalid credentials" };
			}
			throw err;
		}

		//return { success: true };
	} catch (err) {
		//console.log(err);
		throw err;
	}
};
