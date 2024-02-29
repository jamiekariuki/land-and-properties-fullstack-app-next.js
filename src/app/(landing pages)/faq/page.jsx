import Faq from "@/components/faq pages/faq";
import Cta from "@/components/landing pages/cta/cta";
import PageHero from "@/components/styled components/page hero/page.hero";
import React from "react";

const FaqPage = () => {
	return (
		<div>
			<PageHero
				title={"FAQ"}
				image={
					"https://i.postimg.cc/d0xmcZhN/pexels-pok-rie-6225499.jpg"
				}
			/>
			<Faq />
			<Cta />
		</div>
	);
};

export default FaqPage;
