import { connectToDB } from "../db.connect";
import { Message } from "../models/message";

//get gallery
export const GetAllMessages = async () => {
	try {
		connectToDB();
		const messages = await Message.find();
		return messages;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch Messages!");
	}
};
