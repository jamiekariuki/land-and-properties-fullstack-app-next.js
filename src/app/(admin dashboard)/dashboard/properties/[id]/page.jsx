import EditProperty from "@/components/Admin dashboard/properties/edit property/edit.property";
import { GetProperty } from "@/lib/data/properties";
import React from "react";

const EditPropertyPage = async ({ params }) => {
	const id = params.id;

	const properties = await GetProperty(id);
	const serializedProperties = JSON.stringify(properties);
	const parsedProperties = JSON.parse(serializedProperties);

	return (
		<div>
			{" "}
			<EditProperty item={parsedProperties} />{" "}
		</div>
	);
};

export default EditPropertyPage;
