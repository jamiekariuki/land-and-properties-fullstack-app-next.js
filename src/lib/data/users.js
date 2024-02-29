import { User } from "@/lib/models/users";
import { connectToDB } from "../db.connect";

export const GetAllUsers = async () => {
	try {
		connectToDB();
		const count = await User.find().count();
		const users = await User.find();
		return { count, users };
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch users!");
	}
};

export const GetUser = async (id) => {
	try {
		connectToDB();
		const users = await User.findById(id);
		return users;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch users!");
	}
};
