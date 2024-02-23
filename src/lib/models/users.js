import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
		},
		image: {
			type: String,
		},
		role: {
			type: String,
			enum: ["user", "admin", "superAdmin"],
			default: "user",
		},
	},
	{ timestamps: true }
);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
