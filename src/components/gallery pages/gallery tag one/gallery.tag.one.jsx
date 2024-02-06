"use client";
import React from "react";
import "./gallery.tag.one.scss";
import Image from "next/image";
import { sliderData } from "@/components/landing pages/hero/slides.data";

const GalleryTagOne = () => {
	return (
		<div className="gallery-tag-one">
			<div className="gallery-1">
				<h3>Quasi fugiat quis ipsum</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quia, vero, corporis similique perspiciatis adipisci
					consequuntur quasi fugiat fugit pariatur, quis ipsum
					quibusdam unde ratione magni sint magnam velit sed
					dignissimos?
				</p>
			</div>
			<div className="gallery">
				{sliderData.map((item, index) => (
					<div className="gallery-box" key={index}>
						<GalleryCard pic={item.pic} />
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
