"use client";
import React from "react";
import "./tag.three.scss";
import Image from "next/image";
import Link from "next/link";

const variants = {
	initial: {
		opacity: 0,
		y: -6,
	},
	animate: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.5,
			staggerChildren: 0.4,
		},
	},
};

const TagThree = () => {
	return (
		<div className="tag-3">
			<div className="tag-3-info">
				<motion.div
					className="tag-3-container"
					variants={variants}
					initial="initial"
					whileInView="animate"
				>
					<motion.h1 variants={variants}>
						Navigating Your Real Estate Journey{" "}
					</motion.h1>
					<motion.p variants={variants}>
						We're driven by excellence, delivering unmatched service
						and expertise in real estate. Upholding ethics,
						fostering relationships, we aim for utmost satisfaction.
					</motion.p>

					<Link href={"/about-us"}>
						<motion.button variants={variants}>
							<p>See More</p>
						</motion.button>
					</Link>
				</motion.div>
			</div>
			<Image
				alt="product-image"
				src="https://i.postimg.cc/15ZCJ1c2/aerial-overhead-shot-seashore-with-pure-turquoise-water-lodges-during-daytime.jpg"
				fill={true}
				className="paralax-image"
				quality={100}
			/>
		</div>
	);
};

export default TagThree;
