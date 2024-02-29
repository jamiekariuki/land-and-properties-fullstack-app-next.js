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
