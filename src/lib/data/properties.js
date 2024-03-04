import { connectToDB } from "@/lib/db.connect";
import { Property } from "@/lib/models/property";
import { Wishlist } from "@/lib/models/wishlist";
import { cache } from "react";

//get properties
export const GetAllProperties = async (q, location, minPrice, maxPrice) => {
	try {
		connectToDB();

		const query = {};

		// Add keyword search if 'q' parameter is provided
		if (q !== "") {
			query.$or = [
				{ title: { $regex: new RegExp(q, "i") } }, // Case-insensitive title search
				{ description: { $regex: new RegExp(q, "i") } }, // Case-insensitive content search
			];
		}

		// Add price range filtering if 'minPrice' or 'maxPrice' parameters are provided
		if (minPrice !== "" || maxPrice !== "") {
			query.price = {}; // Initialize price query object

			if (minPrice) {
				query.price.$gte = minPrice; // Greater than or equal to minPrice
			}

			if (maxPrice) {
				query.price.$lte = maxPrice; // Less than or equal to maxPrice
			}
		}

		if (location !== "") {
			query.location = { $regex: new RegExp(location, "i") }; // Case-insensitive location search
		}

		//await new Promise((resolve) => setTimeout(resolve, 8000));

		const properties = await Property.find(query);

		return properties;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch properties!");
	}
};
//get single property
export const GetProperty = cache(async (id) => {
	try {
		connectToDB();
		const property = await Property.findById(id);

		return property;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch property!");
	}
});
// get featured properties
export const GetFeaturedProperties = async () => {
	try {
		connectToDB();
		const properties = await Property.find({ featured: true });
		return properties;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch properties!");
	}
};

//get popular properties
export const GetPopularProperties = async () => {
	try {
		connectToDB();
		const properties = await Property.find({ popular: true });
		return properties;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch properties!");
	}
};

//get wishlist
export const GetWishlist = async (userId) => {
	try {
		connectToDB();
		const wishlist = await Wishlist.findOne({ userId }).populate(
			"propertyIds"
		);
		return wishlist;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch post!");
	}
};
