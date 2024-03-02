"use client";
import React from "react";
import "./background.scss";
import Image from "next/image";
import { sliderData } from "../slides.data";
import { CardSlider } from "@/components/styled components/sliders/slider";

const Backgound = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		fade: true,
	};

	return (
		<div className="bg-1">
			<CardSlider settings={settings}>
				{sliderData.map((item, index) => (
					<div key={index} className="bg-container">
						<Image
							src={item.pic}
							alt="background photo"
							fill={true}
							className="bg-image"
							placeholder="blur"
							blurDataURL={rgbDataURL(255, 255, 255)}
						/>
					</div>
				))}
			</CardSlider>
		</div>
	);
};

export default Backgound;
