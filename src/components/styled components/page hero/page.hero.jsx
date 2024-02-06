import React from "react";
import "./page.hero.scss";
import Image from "next/image";

const PageHero = ({ title, image }) => {
	return (
		<div className="page-hero">
			<div className="page-hero-info">
				<div className="page-hero-container">
					<h3>{title} </h3>
				</div>
			</div>

			<Image
				alt="product-image"
				src={image}
				fill={true}
				className="page-hero-image"
				quality={100}
			/>
		</div>
	);
};

export default PageHero;
