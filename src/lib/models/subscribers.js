import mongoose from "mongoose";

const subscribersSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Subscribers =
	mongoose.models.Subscribers ||
	mongoose.model("Subscribers", subscribersSchema);
