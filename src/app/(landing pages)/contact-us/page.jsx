import ContactTagOne from "@/components/contact pages/contact tage one/contact.tag.one";
import Cta from "@/components/landing pages/cta/cta";
import PageHero from "@/components/styled components/page hero/page.hero";

const Contactpage = () => {
	return (
		<div>
			<PageHero
				title={"Contact Us"}
				image={
					"https://i.postimg.cc/15ZCJ1c2/aerial-overhead-shot-seashore-with-pure-turquoise-water-lodges-during-daytime.jpg"
				}
			/>
			<ContactTagOne />
			<Cta />
		</div>
	);
};

export default Contactpage;
