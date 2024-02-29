export const GetAllTestimonies = async () => {
	try {
		connectToDB();
		const testimonies = await Property.find();
		return testimonies;
	} catch (err) {
		//console.log(err);
		throw new Error("Failed to fetch testimonies!");
	}
};
