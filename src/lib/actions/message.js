"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../db.connect";
import { Message } from "../models/message";

export const addMessage = async (data) => {
	try {
		connectToDB();

		const newMessage = new Message(data);

		await newMessage.save();

		return { success: "Message sent" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//delete one
export const deleteMessage = async (id) => {
	try {
		connectToDB();

		await Message.findByIdAndDelete(id);

		revalidatePath("/dashboard/messages");
		return { success: "Message deleted" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};
