"use client";
import React from "react";
import "./tag.one.scss";
import SplitLayout from "@/components/styled components/containers/split layout/split.layout";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
	initial: {
		opacity: 0,
		y: -5,
	},
	animate: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.5,
			staggerChildren: 0.3,
		},
	},
};

const TagOne = () => {
	return (
		<div className="tag-one">
			<SplitLayout height={"350px"}>
				<div className="split-left">
					<div className="land-image">
						<Image
							alt="product-image"
							src="https://i.postimg.cc/tgtFNRxN/aerial-view-raf-benson-oxfordshire-surrounding-countryside.jpg"
							fill={true}
							className="l-image"
							quality={100}
						/>
					</div>
				</div>
				<div className="split-right">
					<motion.div
						className="right-l"
						variants={variants}
						initial="initial"
						whileInView="animate"
					>
						<motion.h6 variants={variants}>
							Discover Endless Possibilities.
						</motion.h6>
						<motion.h3 variants={variants}>
							Land Opportunities Await
						</motion.h3>
						<motion.p variants={variants}>
							Explore endless possibilities with Peculiarmarc
							Ventures Limited in Kenya. Our passion for land
							knows no bounds. From affordable plots to
							trustworthy deals, we specialize in unlocking cheap
							and affordable land opportunities. Discover your
							next investment with us today.
						</motion.p>
					</motion.div>
				</div>
			</SplitLayout>
		</div>
	);
};

export default TagOne;
