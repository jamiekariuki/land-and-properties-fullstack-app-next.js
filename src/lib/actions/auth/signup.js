"use server";

import { signIn } from "@/lib/auth";
import { connectToDB } from "@/lib/db.connect";
import { User } from "@/lib/models/users";
import { AuthSchema } from "@/utils/validators/authentication/auth.schema";
import bcrypt from "bcryptjs";

/* import * as z from "zod";
import { AuthError } from "next-auth";

import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { sendVerificationEmail, sendTwoFactorTokenEmail } from "@/lib/mail";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import {
	generateVerificationToken,
	generateTwoFactorToken,
} from "@/lib/tokens";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const login = async (
	values: z.infer<typeof LoginSchema>,
	callbackUrl?: string | null
) => {
	const validatedFields = LoginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid fields!" };
	}

	const { email, password, code } = validatedFields.data;

	const existingUser = await getUserByEmail(email);

	if (!existingUser || !existingUser.email || !existingUser.password) {
		return { error: "Email does not exist!" };
	}

	if (!existingUser.emailVerified) {
		const verificationToken = await generateVerificationToken(
			existingUser.email
		);

		await sendVerificationEmail(
			verificationToken.email,
			verificationToken.token
		);

		return { success: "Confirmation email sent!" };
	}

	if (existingUser.isTwoFactorEnabled && existingUser.email) {
		if (code) {
			const twoFactorToken = await getTwoFactorTokenByEmail(
				existingUser.email
			);

			if (!twoFactorToken) {
				return { error: "Invalid code!" };
			}

			if (twoFactorToken.token !== code) {
				return { error: "Invalid code!" };
			}

			const hasExpired = new Date(twoFactorToken.expires) < new Date();

			if (hasExpired) {
				return { error: "Code expired!" };
			}

			await db.twoFactorToken.delete({
				where: { id: twoFactorToken.id },
			});

			const existingConfirmation = await getTwoFactorConfirmationByUserId(
				existingUser.id
			);

			if (existingConfirmation) {
				await db.twoFactorConfirmation.delete({
					where: { id: existingConfirmation.id },
				});
			}

			await db.twoFactorConfirmation.create({
				data: {
					userId: existingUser.id,
				},
			});
		} else {
			const twoFactorToken = await generateTwoFactorToken(
				existingUser.email
			);
			await sendTwoFactorTokenEmail(
				twoFactorToken.email,
				twoFactorToken.token
			);

			return { twoFactor: true };
		}
	}

	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid credentials!" };
				default:
					return { error: "Something went wrong!" };
			}
		}

		throw error;
	}
}; */

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
