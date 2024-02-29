import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
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
		property: {
			propertyId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Property",
			},
			title: {
				type: String,
			},
			description: {
				type: String,
			},
			picture: {
				type: [String],
			},
		},
	},
	{ timestamps: true }
);

export const Message =
	mongoose.models.Message || mongoose.model("Message", messageSchema);
