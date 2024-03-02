import React from "react";
import Property from "./property";
import { GetProperty } from "@/lib/data/properties";

const PropertyServer = async ({ params }) => {
	const id = params.id;

	const properties = await GetProperty(id);
	const serializedProperties = JSON.stringify(properties);
	const parsedProperties = JSON.parse(serializedProperties);

	return (
		<div>
			<Property item={parsedProperties} />
		</div>
	);
};

export default PropertyServer;
