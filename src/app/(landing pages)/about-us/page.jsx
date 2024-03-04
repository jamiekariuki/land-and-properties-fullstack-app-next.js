import AboutTagOne from "@/components/about pages/about tag one/about.tag.one";
import PageHero from "@/components/styled components/page hero/page.hero";

//meta data
export const metadata = {
	title: "About us",
	description:
		"Peculiarmarc ventures limited is one of the leading brands in the Kenyan real estate sector. Our main objecve is to empower property investors and transform the society. Peculiarmarc is on course to acquire and add value to land, which are parcularly enhanced to suit immediate residenal selement, commercial Agricultural purposes and futurisc capital gain. Peculiarmarc is a one-stop shop offering an opportunity for Land & home ownership soluons to its customers.",
};

const AboutPage = () => {
	return (
		<div>
			<PageHero
				title={"About Us"}
				image={
					"https://i.postimg.cc/d0xmcZhN/pexels-pok-rie-6225499.jpg"
				}
			/>
			<AboutTagOne />
		</div>
	);
};

export default AboutPage;
