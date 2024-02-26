import * as yup from "yup";

export const PropertySchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().required(),
	location: yup.string().required(),
	coordinates: yup.string().required(),
	//	picture: yup.array().of(yup.string().url()).required(),
	price: yup.string(),
	priceQuote: yup.string(),
	amenities: yup.string(),
	whyThisProperty: yup.string(),
});
