import GalleryTagOne from "@/components/gallery pages/gallery tag one/gallery.tag.one";
import Cta from "@/components/landing pages/cta/cta";
import PageHero from "@/components/styled components/page hero/page.hero";
import { GetAllGallery } from "@/lib/data/gallery";

const AboutPage = async () => {
	const pictures = await GetAllGallery();
	const serializedpictures = JSON.stringify(pictures);
	const parsedpictures = JSON.parse(serializedpictures);
	return (
		<div>
			<PageHero
				title={"Gallery"}
				image={
					"https://i.postimg.cc/MG93YJNN/pexels-nico-becker-5850641.jpg"
				}
			/>
			<GalleryTagOne pictures={parsedpictures} />
			<Cta />
		</div>
	);
};

export default AboutPage;
