import FavouriteProperties from "@/components/properties pages/favourite properties/favourite.properties";
import PageHero from "@/components/styled components/page hero/page.hero";
import React from "react";

const FavouritePage = () => {
	return (
		<div>
			<PageHero
				title={"Favourite"}
				image={
					"https://i.postimg.cc/8cWmpXh7/pexels-mehmet-turgut-kirkgoz-4832350.jpg"
				}
			/>
			<FavouriteProperties />
		</div>
	);
};

export default FavouritePage;
