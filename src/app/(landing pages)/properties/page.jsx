import Properties from "@/components/properties pages/properties/properties";
import PageHero from "@/components/styled components/page hero/page.hero";
import React from "react";

const Propertiespage = () => {
	return (
		<div>
			<PageHero
				title={"Properties"}
				image={
					"https://i.postimg.cc/15ZCJ1c2/aerial-overhead-shot-seashore-with-pure-turquoise-water-lodges-during-daytime.jpg"
				}
			/>
			<Properties />
		</div>
	);
};

export default Propertiespage;
