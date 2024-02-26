import { revalidatePath } from "next/cache";
import { connectToDB } from "../db.connect";
import { Testimony } from "../models/testimony";

export const addTestimony = async (data) => {
	try {
		connectToDB();

		const newPost = new Testimony(data);

		await newPost.save();

		revalidatePath("/testimonies");
		revalidatePath("/dashboard/testimonies");
		return { success: "Testimony uploaded" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//update
export const updateTestimony = async (id, data) => {
	try {
		connectToDB();

		await Testimony.findByIdAndUpdate(id, data, { new: true });

		revalidatePath("/testimonies");
		revalidatePath("/dashboard/testimonies");
		return { success: "Testimony Updated" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//delete one
export const deleteTestimony = async (id) => {
	try {
		connectToDB();

		await Testimony.findByIdAndDelete(id);

		revalidatePath("/testimonies");
		revalidatePath("/dashboard/testimonies");
		return { success: "Testimony deleted" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};
