import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		propertyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Property",
		},
		name: {
			type: String,
		},
		email: {
			type: String,
			required: true,
		},
		number: {
			type: String,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Message =
	mongoose.models.Message || mongoose.model("Message", messageSchema);
