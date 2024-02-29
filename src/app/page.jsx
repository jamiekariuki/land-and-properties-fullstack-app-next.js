import { PropertySlider } from "@/components/landing pages/property slider/property.slider";
import TagOne from "@/components/landing pages/tag one/tag.one";
import TagTwo from "@/components/landing pages/tag two/tag.two";
import Hero from "@/components/landing pages/hero/hero";
import TagThree from "@/components/landing pages/tag three/tag.three";
import TagFive from "@/components/landing pages/tag five/tag.five";
import TagFour from "@/components/landing pages/tag four/tag.four";
import Cta from "@/components/landing pages/cta/cta";
import TagSix from "@/components/landing pages/tag six/tag.six";

const PageHome = () => {
	return (
		<div>
			<Hero />
			<TagOne />
			<TagTwo />
			<PropertySlider />
			<TagThree />
			<TagFour />
			<TagFive />
			<TagSix />
			<Cta />
		</div>
	);
};

export default PageHome;
