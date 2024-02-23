import { User } from "@/lib/models/users";

export const GetAllUsers = async () => {
	try {
		connectToDB();
		const users = await User.find();
		return users;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch users!");
	}
};
