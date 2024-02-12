import { PropertiesData } from "@/components/properties pages/properties/property";
import Property from "@/components/properties pages/property/property";
import PageHero from "@/components/styled components/page hero/page.hero";
import React from "react";

const PropertyPage = ({ params }) => {
	const param = params.id;

	const item = PropertiesData.find((obj) => obj.id === param);

	return (
		<div>
			<PageHero
				title={item.title}
				image={
					"https://i.postimg.cc/15ZCJ1c2/aerial-overhead-shot-seashore-with-pure-turquoise-water-lodges-during-daytime.jpg"
				}
			/>
			<Property item={item} />
		</div>
	);
};

export default PropertyPage;
