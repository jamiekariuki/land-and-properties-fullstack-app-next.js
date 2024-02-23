"use server";

import { signOut } from "@/lib/auth";

export const AuthLogout = async () => {
	await signOut();
};
