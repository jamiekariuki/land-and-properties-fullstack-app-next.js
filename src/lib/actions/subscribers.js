"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../db.connect";
import { Subscribers } from "../models/subscribers";

export const addSubscriber = async (data) => {
	try {
		connectToDB();

		const newSubscriber = new Subscribers(data);

		await newSubscriber.save();

		return { success: "You subscribed succesfull" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};

//delete one
export const deleteSubscriber = async (id) => {
	try {
		connectToDB();

		await Subscribers.findByIdAndDelete(id);

		revalidatePath("/dashboard/mails");
		return { success: "Subscriber deleted" };
	} catch (err) {
		//console.log(err);
		return { error: "Something went wrong!" };
	}
};
