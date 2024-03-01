import { connectToDB } from "../db.connect";
import { Message } from "../models/message";

//get gallery
export const GetAllMessages = async (message) => {
	try {
		connectToDB();
		let query = {};
		if (message === "From contacted") {
			query.property.title = { $exists: false };
		} else if (message === "From properties") {
			query.property.title = { $exists: true };
		}

		const messages = await Message.find(query);
		return messages;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch Messages!");
	}
};
