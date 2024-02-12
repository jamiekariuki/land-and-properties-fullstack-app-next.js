"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import { BsArrowDownCircleFill } from "react-icons/bs";

export const CardSlider = ({ children, settings, wrapper }) => {
	var arrows = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	var allSettings = { ...settings, ...arrows };

	return (
		<div className="slider-container">
			<Slider {...allSettings} className={wrapper && "slider-wrapper"}>
				{children}
			</Slider>
		</div>
	);
};

function SampleNextArrow({ onClick }) {
	return (
		<div className="arrow arrow-right" onClick={onClick}>
			<BsArrowDownCircleFill className="arrow-icon icon-right" />
		</div>
	);
}

function SamplePrevArrow({ onClick }) {
	return (
		<div className="arrow arrow-left" onClick={onClick}>
			<BsArrowDownCircleFill className="arrow-icon icon-left" />
		</div>
	);
}
