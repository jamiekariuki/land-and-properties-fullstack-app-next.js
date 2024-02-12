import { PropertiesData } from "@/components/properties pages/properties/property";
import Property from "@/components/properties pages/property/property";
import React from "react";

const PropertyPage = ({ params }) => {
	const param = params.id;

	const item = PropertiesData.find((obj) => obj.id === param);

	return (
		<div>
			<Property item={item} />
		</div>
	);
};

export default PropertyPage;
