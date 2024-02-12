import Properties from "@/components/properties pages/properties/properties";
import PageHero from "@/components/styled components/page hero/page.hero";
import React from "react";

const Propertiespage = () => {
	return (
		<div>
			<PageHero
				title={"Properties"}
				image={
					"https://i.postimg.cc/3JSs6nKg/pexels-arthouse-studio-4326847.jpg"
				}
			/>
			<Properties />
		</div>
	);
};

export default Propertiespage;
