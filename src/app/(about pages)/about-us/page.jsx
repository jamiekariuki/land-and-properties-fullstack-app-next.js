import AboutTagOne from "@/components/about pages/about tag one/about.tag.one";
import PageHero from "@/components/styled components/page hero/page.hero";
import React from "react";

const AboutPage = () => {
	return (
		<div>
			<PageHero
				title={"About Us"}
				image={
					"https://i.postimg.cc/15ZCJ1c2/aerial-overhead-shot-seashore-with-pure-turquoise-water-lodges-during-daytime.jpg"
				}
			/>
			<AboutTagOne />
		</div>
	);
};

export default AboutPage;
