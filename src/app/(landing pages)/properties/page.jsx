import Properties from "@/components/properties pages/properties/properties";
import LoadingSpiner from "@/components/styled components/loading/loading.spiner";
import PageHero from "@/components/styled components/page hero/page.hero";
import { Suspense } from "react";

//meta data
export const metadata = {
	title: "Properties",
	description:
		"Uncover Property Opportunities: Explore our extensive selection of land options, ranging from residential to commercial. Find the perfect plot to suit your needs and aspirations",
};

const Propertiespage = ({ searchParams }) => {
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
