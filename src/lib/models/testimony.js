import mongoose from "mongoose";

const testimonySchema = new mongoose.Schema(
	{
		photos: {
			type: String, // Array of strings (photo URLs)
		},
		name: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Testimony =
	mongoose.models.Testimony || mongoose.model("Testimony", testimonySchema);
