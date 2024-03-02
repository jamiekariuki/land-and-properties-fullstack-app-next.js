"use client";
import React, { Suspense } from "react";
import "./properties.scss";
import PropertiesCard from "./properties card/properties.card";
import PropertiesFilter from "./properties filter/properties.filter";

const Properties = ({ properties }) => {
	return (
		<div className="pproperties">
			<div className="properties-container">
				<div className="properties-filter-container">
					<PropertiesFilter />
				</div>

				{properties.map((item, index) => (
					<div className="card-container" key={index}>
						<PropertiesCard item={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Properties;
