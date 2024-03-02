import GalleryTagOne from "@/components/gallery pages/gallery tag one/gallery.tag.one";
import Cta from "@/components/landing pages/cta/cta";
import LoadingSpiner from "@/components/styled components/loading/loading.spiner";
import PageHero from "@/components/styled components/page hero/page.hero";
import { Suspense } from "react";

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
