import { connectToDB } from "../db.connect";
import { Gallery } from "../models/gallery";

//get gallery
export const GetAllGallery = async () => {
	try {
		connectToDB();
		const gallery = await Gallery.find();
		return gallery;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch gallery!");
	}
};
