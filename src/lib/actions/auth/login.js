"use server";

import { signIn } from "@/lib/auth";
import { AuthSchema } from "@/utils/validators/authentication/auth.schema";

export const AuthLogIn = async (data) => {
	try {
		await AuthSchema.validate(data);
	} catch {
		return { error: "Invalid fields!" };
	}

	return { error: "Invalid fields!" };

	/* const { email, password } = data;

	try {
		await signIn("credentials", { email, password });
	} catch (err) {
		// console.log(err);
		if (err.message.includes("CredentialsSignin")) {
			return { error: "Invalid credentials" };
		}
		throw err;
	} */
};

export const GoogleLogin = async () => {
	await signIn("google");
};
