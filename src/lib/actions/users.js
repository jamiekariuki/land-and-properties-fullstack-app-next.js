"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../db.connect";
import { User } from "../models/users";
import { Wishlist } from "../models/wishlist";

export const addUser = async (data) => {
	try {
		connectToDB();

		const newPost = new User(data);

		await newPost.save();

		revalidatePath("/dashboard/users");
		return { success: "User added" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//update
export const updateUser = async (id, data) => {
	try {
		connectToDB();

		await User.findByIdAndUpdate(id, data, { new: true });

		revalidatePath("/dashboard/users");
		return { success: "User Updated" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//delete one
export const deleteUser = async (id) => {
	try {
		connectToDB();

		await User.findByIdAndDelete(id);
		await Wishlist.deleteMany({ userId: id });

		revalidatePath("/dashboard/users");
		return { success: "User deleted" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//delete all
export const deleteAllUser = async (data) => {
	try {
		connectToDB();

		await User.deleteMany();
		await Wishlist.deleteMany();

		revalidatePath("/dashboard/users");
		return { success: "All users deleted" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};
