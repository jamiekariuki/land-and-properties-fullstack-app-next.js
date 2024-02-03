"use client";
import React, { useEffect, useState } from "react";
import "./content.scss";
import { sliderData } from "../slides.data";

const Content = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Update the index to rotate through the sliderData
			setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
		}, 4000);

		// Clean up the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, [sliderData]);

	return <div key={currentIndex}>{sliderData[currentIndex].info}</div>;
};

export default Content;

/* const Content = () => {
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
		<div className="hero-container">
			<CardSlider settings={settings}>
				{sliderData.map((item, index) => (
					<div key={index}>{item.info}</div>
				))}
			</CardSlider>
		</div>
	);
};

export default Content; */
