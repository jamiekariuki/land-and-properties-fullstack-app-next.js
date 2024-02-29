import AdminProperties from "@/components/Admin dashboard/properties/properties";
import { GetAllProperties } from "@/lib/data/properties";
import React from "react";

const PropertiesAdminPage = async ({ searchParams }) => {
	const q = searchParams?.q || "";
	const location = searchParams?.location || "";
	const min = searchParams?.min || "";
	const max = searchParams?.max || "";

	const properties = await GetAllProperties(q, location, min, max);
	const serializedProperties = JSON.stringify(properties);
	const parsedProperties = JSON.parse(serializedProperties);

	return (
		<div>
			<AdminProperties properties={parsedProperties} />
		</div>
	);
};

export default PropertiesAdminPage;
