import React from "react";
import "./hero.scss";
import LandSlider from "./land slider/land.slider";
import Backgound from "./background/backgound";
import Content from "./content/content";

const Hero = () => {
	return (
		<div className="hero">
			<div className="bg-backdrop"></div>
			<div className="background">
				<Backgound />
			</div>
			<div className=" hero-left">
				<Content />
			</div>
			<div className=" hero-right">
				<LandSlider />
			</div>
		</div>
	);
};

export default Hero;
