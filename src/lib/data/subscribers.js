import { connectToDB } from "../db.connect";
import { Subscribers } from "../models/subscribers";

//get gallery
export const GetAllSubscribers = async () => {
	try {
		connectToDB();
		const subscribers = await Subscribers.find();
		return subscribers;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch Subscribers!");
	}
};
