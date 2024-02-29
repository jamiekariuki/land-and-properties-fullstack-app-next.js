import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
	{
		picture: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Gallery =
	mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);
