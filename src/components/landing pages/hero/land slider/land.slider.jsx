"use client";
import React, { useState } from "react";
import "./land.slider.scss";
import { CardSlider } from "@/components/styled components/sliders/slider";
import Image from "next/image";
import { sliderData } from "../slides.data";

const LandSlider = () => {
	const [index, setIndex] = useState(0);

	const settings = {
		arrows: false,
		dots: false,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 4000,
		beforeChange: (current, next) => setIndex(next),
	};

	return (
		<div className="land-slider">
			<CardSlider settings={settings}>
				{sliderData.map((item, idx) => (
					<div
						key={idx}
						className={
							idx === index
								? "current card-container"
								: "card-container"
						}
					>
						<div className="land-backdrop"></div>
						<Image
							src={item.pic}
							alt="land image"
							fill={true}
							className="card-image"
						/>
					</div>
				))}
			</CardSlider>
		</div>
	);
};

export default LandSlider;
