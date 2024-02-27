import AboutTagOne from "@/components/about pages/about tag one/about.tag.one";
import PageHero from "@/components/styled components/page hero/page.hero";

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
