import GalleryTagOne from "@/components/gallery pages/gallery tag one/gallery.tag.one";
import Cta from "@/components/landing pages/cta/cta";
import LoadingSpiner from "@/components/styled components/loading/loading.spiner";
import PageHero from "@/components/styled components/page hero/page.hero";
import { Suspense } from "react";

//meta data
export const metadata = {
	title: "Gallery",
	description:
		"Explore Our Gallery: Step into our world and glimpse the essence of Peculiarmarc Ventures Limited through captivating imagery",
};

const GalleryPage = async () => {
	return (
		<div>
			<PageHero
				title={"Gallery"}
				image={
					"https://i.postimg.cc/MG93YJNN/pexels-nico-becker-5850641.jpg"
				}
			/>
			<Suspense fallback={<LoadingSpiner />}>
				<GalleryTagOne />
			</Suspense>
			<Cta />
		</div>
	);
};

export default GalleryPage;
