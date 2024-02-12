import FavouriteProperties from "@/components/properties pages/favourite properties/favourite.properties";
import PageHero from "@/components/styled components/page hero/page.hero";
import React from "react";

const FavouritePage = () => {
	return (
		<div>
			<PageHero
				title={"Favourite"}
				image={
					"https://i.postimg.cc/15ZCJ1c2/aerial-overhead-shot-seashore-with-pure-turquoise-water-lodges-during-daytime.jpg"
				}
			/>
			<FavouriteProperties />
		</div>
	);
};

export default FavouritePage;
