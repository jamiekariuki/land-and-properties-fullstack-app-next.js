"use client";
import React from "react";
import Image from "next/image";
import { property } from "./property.data";
import "./property.slider.scss";
import { CardSlider } from "@/components/styled components/sliders/slider";

export const PropertySlider = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 430,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="property-slider">
			<div className="property-slider-heading">
				<h3>Catalogue</h3>

				<div className="slider-container">
					<CardSlider settings={settings} wrapper={true}>
						{property.map((data, index) => (
							<div key={index} className="card-container">
								<div className="card-image-container">
									<Image
										src={data.image}
										alt="property photo"
										fill={true}
										className="property-image"
									/>

									<div className="hover-container">
										<div className="hover-details">
											<h6>{data.propertyName}</h6>

											<div className="description">
												<h5>
													{data.description
														.split(" ")
														.slice(0, 10)
														.join(" ")}
													{data.description.split(" ")
														.length > 10 && " ..."}
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</CardSlider>
				</div>
			</div>
		</div>
	);
};
