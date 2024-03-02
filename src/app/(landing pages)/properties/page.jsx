import Properties from "@/components/properties pages/properties/properties";
import LoadingSpiner from "@/components/styled components/loading/loading.spiner";
import PageHero from "@/components/styled components/page hero/page.hero";
import { Suspense } from "react";
//import { GetAllProperties } from "@/lib/data/properties";

const Propertiespage = async ({ searchParams }) => {
	/* const q = searchParams?.q || "";
	const location = searchParams?.location || "";
	const min = searchParams?.min || "";
	const max = searchParams?.max || "";
	const properties = await GetAllProperties(q, location, min, max);

	const serializedProperties = JSON.stringify(properties);
	const parsedProperties = JSON.parse(serializedProperties); */

	return (
		<div>
			<PageHero
				title={"Properties"}
				image={
					"https://i.postimg.cc/3JSs6nKg/pexels-arthouse-studio-4326847.jpg"
				}
			/>

			<Suspense fallback={<LoadingSpiner />}>
				<Properties searchParams={searchParams} />
			</Suspense>
		</div>
	);
};

export default Propertiespage;
