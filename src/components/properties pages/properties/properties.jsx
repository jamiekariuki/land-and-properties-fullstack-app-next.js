import "./properties.scss";
import PropertiesCard from "./properties card/properties.card";
import PropertiesFilter from "./properties filter/properties.filter";
import { GetAllProperties } from "@/lib/data/properties";

const Properties = async ({ searchParams }) => {
	const q = searchParams?.q || "";
	const location = searchParams?.location || "";
	const min = searchParams?.min || "";
	const max = searchParams?.max || "";

	const properties = await GetAllProperties(q, location, min, max);

	const serializedProperties = JSON.stringify(properties);
	const parsedProperties = JSON.parse(serializedProperties);

	return (
		<div className="pproperties">
			<div className="properties-container">
				<div className="properties-filter-container">
					<PropertiesFilter />
				</div>

				{parsedProperties.map((item, index) => (
					<div className="card-container" key={index}>
						<PropertiesCard item={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Properties;
