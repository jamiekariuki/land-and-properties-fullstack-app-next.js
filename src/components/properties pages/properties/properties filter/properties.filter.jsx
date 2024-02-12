import React from "react";
import "./properties.filter.scss";
import Search from "@/components/styled components/inputs/search";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import SelectOption from "@/components/styled components/inputs/select.option";

const PropertiesFilter = () => {
	const locations = ["Nairobi", "Malindi", "Nakuru", "Lamu", "Narok"];

	return (
		<div className="properties-filter">
			<div className="search-filter">
				<Search />
			</div>

			<div className="category-filter">
				<div className="location f-c">
					<p>Select Location</p>
					<SelectOption
						label={"Location"}
						list={locations}
						/* value={aiLevel} */
						/* changeValue={(e) => {
							setAiLevel(e);
						}} */
					/>
				</div>
				<div className="min f-c">
					<p>Min Price</p>
					<Inputs2
						/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
						type={"Text"}
						label={"Min"}
						id={"min-price"}
						value={""}

						/* changeValue={(e) => {
									handleChange("title", e);
								}} */
					/>
				</div>
				<div className="max f-c">
					<p>Max price</p>
					<Inputs2
						/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
						type={"text"}
						label={"Max"}
						id={"max-price"}
						value={""}

						/* changeValue={(e) => {
									handleChange("title", e);
								}} */
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertiesFilter;
