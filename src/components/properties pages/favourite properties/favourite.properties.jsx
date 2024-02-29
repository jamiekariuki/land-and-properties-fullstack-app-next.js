import React from "react";
import "./favourite.properties.scss";
import { PropertiesData } from "../properties/property";
import PropertiesCard2 from "../properties/properties2 card/properties2";

const FavouriteProperties = () => {
	return (
		<div className="fav-properties">
			<div
				className={
					PropertiesData.length > 2
						? "fav-card fav-card2"
						: "fav-card"
				}
			>
				{PropertiesData.map((item, index) => (
					<div key={index}>
						<PropertiesCard2 item={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default FavouriteProperties;
