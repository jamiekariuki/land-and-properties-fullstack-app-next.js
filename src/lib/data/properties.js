import { connectToDB } from "@/lib/db.connect";
import { Property } from "@/lib/models/property";
import { Wishlist } from "@/lib/models/wishlist";

//get properties
export const GetAllProperties = async () => {
	try {
		connectToDB();
		const properties = await Property.find();
		return properties;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch properties!");
	}
};
//get single property
export const GetProperty = async (id) => {
	try {
		connectToDB();
		const property = await Property.findOne({ id });
		return property;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch property!");
	}
};
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
export const GetPOpularProperties = async () => {
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
