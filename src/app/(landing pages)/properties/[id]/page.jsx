import PropertyServer from "@/components/properties pages/property/property.server";
import LoadingSpiner from "@/components/styled components/loading/loading.spiner";
import PageHero from "@/components/styled components/page hero/page.hero";
import React, { Suspense } from "react";

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
