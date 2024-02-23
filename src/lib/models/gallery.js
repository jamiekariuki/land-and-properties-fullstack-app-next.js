import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
	{
		timestamp: {
			type: Date,
			default: Date.now,
		},
		picture: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Gallery =
	mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);
