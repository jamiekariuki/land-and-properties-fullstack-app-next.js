import ContactTagOne from "@/components/contact pages/contact tage one/contact.tag.one";
import Cta from "@/components/landing pages/cta/cta";
import PageHero from "@/components/styled components/page hero/page.hero";

const Contactpage = () => {
	return (
		<div>
			<PageHero
				title={"Contact Us"}
				image={"https://i.postimg.cc/G38zdRng/aerial-view-village.jpg"}
			/>
			<ContactTagOne />
			<Cta />
		</div>
	);
};

export default Contactpage;
