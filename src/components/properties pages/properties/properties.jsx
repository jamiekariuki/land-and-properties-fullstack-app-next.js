"use client";
import React from "react";
import "./properties.scss";
import PropertiesCard from "./properties card/properties.card";
import { PropertiesData } from "./property";
import PropertiesFilter from "./properties filter/properties.filter";

const Properties = () => {
	return (
		<div className="properties">
			<div className="properties-container">
				<div className="properties-filter-container">
					<PropertiesFilter />
				</div>
				{PropertiesData.map((item, index) => (
					<div className="card2-container" key={index}>
						<PropertiesCard item={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Properties;
