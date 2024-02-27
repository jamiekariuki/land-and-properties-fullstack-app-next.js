"use client";
import React from "react";
import "./gallery.tag.one.scss";
import Image from "next/image";
import { sliderData } from "@/components/landing pages/hero/slides.data";

const GalleryTagOne = ({ pictures }) => {
	return (
		<div className="gallery-tag-one">
			<div className="gallery-1">
				<h3>Explore Our Gallery</h3>
				<p>
					Step into our world and glimpse the essence of Peculiarmarc
					Ventures Limited through captivating imagery
				</p>
			</div>
			<div className="gallery">
				{pictures.map((item, index) => (
					<div className="gallery-box" key={index}>
						<GalleryCard pic={item.picture} />
					</div>
				))}
			</div>
		</div>
	);
};

export default GalleryTagOne;

const GalleryCard = ({ pic }) => {
	return (
		<div className="gallery-card">
			<div className="gallery-image-cont">
				<Image
					alt="gallery-image"
					src={pic}
					fill={true}
					className="page-hero-image"
					quality={100}
				/>
			</div>
		</div>
	);
};
