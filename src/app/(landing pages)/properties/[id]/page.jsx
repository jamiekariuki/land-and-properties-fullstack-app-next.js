import Property from "@/components/properties pages/property/property";
//import PageHero from "@/components/styled components/page hero/page.hero";
import { GetProperty } from "@/lib/data/properties";
import React from "react";

const PropertyPage = async ({ params }) => {
	const id = params.id;

	const properties = await GetProperty(id);
	const serializedProperties = JSON.stringify(properties);
	const parsedProperties = JSON.parse(serializedProperties);

	return (
		<div>
			{/* <PageHero
				title={"Property"}
				image={
					"https://i.postimg.cc/ZRHR2SvH/aerial-photography-town-during-daytime.jpg"
				}
			/> */}
			<Property item={parsedProperties} />
		</div>
	);
};

export default PropertyPage;
