import { revalidatePath } from "next/cache";
import { connectToDB } from "../db.connect";
import { DiasporaPost } from "../models/diaspora";

export const addDiaspora = async (data) => {
	try {
		connectToDB();

		const newPost = new DiasporaPost(data);

		await newPost.save();
		//	console.log("saved to db");
		revalidatePath("/diaspora");
		revalidatePath("/dashboard/diaspora");
		return { success: "Diaspora post added" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//update
export const updateDiasporaPost = async (id, data) => {
	try {
		connectToDB();

		await DiasporaPost.findByIdAndUpdate(id, data, { new: true });

		revalidatePath("/diaspora");
		revalidatePath("/dashboard/diaspora");
		return { success: "Diaspora post Updated" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//delete one
export const deleteDiasporaPost = async (id) => {
	try {
		connectToDB();

		await DiasporaPost.findByIdAndDelete(id);

		revalidatePath("/diaspora");
		revalidatePath("/dashboard/diaspora");
		return { success: "Diaspora post deleted" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};
