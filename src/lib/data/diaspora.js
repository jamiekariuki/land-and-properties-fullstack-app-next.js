import { connectToDB } from "../db.connect";
import { DiasporaPost } from "../models/diaspora";

export const GetAllDisasporaPosts = async () => {
	try {
		connectToDB();
		const disasporaPosts = await DiasporaPost.find();
		return disasporaPosts;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch disasporaPosts!");
	}
};
