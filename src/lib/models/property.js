import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},

		location: {
			type: String,
			required: true,
		},
		coordinates: {
			type: String,
			required: true,
		},
		picture: {
			type: [String], // Array of strings (picture URLs)
			required: true,
		},

		price: {
			type: String,
			required: true,
		},
		priceQuote: {
			type: String,
		},
		amenities: {
			type: String,
		},
		whyThisProperty: {
			type: String,
		},
		featured: {
			type: Boolean,
			default: false,
		},
		popular: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export const Property =
	mongoose.models.Property || mongoose.model("Property", propertySchema);
