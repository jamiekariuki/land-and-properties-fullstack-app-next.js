import PropertyServer from "@/components/properties pages/property/property.server";
import LoadingSpiner from "@/components/styled components/loading/loading.spiner";
import PageHero from "@/components/styled components/page hero/page.hero";
import { GetProperty } from "@/lib/data/properties";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
	// read route params
	const id = params.id;

	// fetch data
	const properties = await GetProperty(id);
	const serializedProperties = JSON.stringify(properties);
	const property = JSON.parse(serializedProperties);

	return {
		title: property.title,
		description: property.description,
		openGraph: {
			images: [
				{
					url: property.picture[0],
				},
			],
		},
	};
}

const PropertyPage = ({ params }) => {
	return (
		<div>
			<PageHero
				title={"Property"}
				image={
					"https://i.postimg.cc/ZRHR2SvH/aerial-photography-town-during-daytime.jpg"
				}
			/>
			<Suspense fallback={<LoadingSpiner />}>
				<PropertyServer params={params} />
			</Suspense>
		</div>
	);
};

export default PropertyPage;
