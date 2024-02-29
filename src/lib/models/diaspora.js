import mongoose from "mongoose";

const diasporaPostSchema = new mongoose.Schema(
	{
		photos: {
			type: [String], // Array of strings (photo URLs)
			required: true,
		},
		layout: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const DiasporaPost =
	mongoose.models.DiasporaPost ||
	mongoose.model("DiasporaPost", diasporaPostSchema);
