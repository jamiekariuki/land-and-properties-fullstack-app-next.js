import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Reference to the User model
			required: true,
		},
		propertyIds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Property", // Reference to the Property model
				required: true,
			},
		],
	},
	{ timestamps: true }
);

export const Wishlist =
	mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);
