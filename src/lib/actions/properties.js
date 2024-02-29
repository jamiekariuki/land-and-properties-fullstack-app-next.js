"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../db.connect";
import { Property } from "../models/property";

export const addProperties = async (data) => {
	try {
		connectToDB();

		const newPost = new Property(data);

		await newPost.save();

		revalidatePath("/properties");
		revalidatePath("/dashboard/properties");
		return { success: "Property created" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//update
export const updateProperty = async (id, data) => {
	try {
		connectToDB();

		await Property.findByIdAndUpdate(id, data, { new: true });

		revalidatePath("/properties");
		revalidatePath("/dashboard/properties");
		return { success: "Property Updated" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//delete one
export const deleteProperty = async (id) => {
	try {
		connectToDB();

		await Property.findByIdAndDelete(id);

		revalidatePath("/properties");
		revalidatePath("/dashboard/properties");
		return { success: "Property deleted" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};
