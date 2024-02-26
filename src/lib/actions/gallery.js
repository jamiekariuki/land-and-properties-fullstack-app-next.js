"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../db.connect";
import { Gallery } from "../models/gallery";

export const addGallery = async (imageUrls) => {
	try {
		connectToDB();

		for (const imageUrl of imageUrls) {
			const newGalleryItem = new Gallery({ picture: imageUrl });

			await newGalleryItem.save();
		}

		revalidatePath("/gallery");
		revalidatePath("/dashboard/gallery");
		return { success: "Photo uploaded" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//delete one
export const deleteGallery = async (id) => {
	try {
		connectToDB();

		await Gallery.findByIdAndDelete(id);

		revalidatePath("/gallery");
		revalidatePath("/dashboard/gallery");
		return { success: "Gallery deleted" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};
