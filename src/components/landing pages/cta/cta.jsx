"use client";
import React from "react";
import "./cta.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
	initial: {
		opacity: 0,
		y: 5,
	},
	animate: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.7,
			staggerChildren: 0.4,
		},
	},
};

const Cta = () => {
	return (
		<div className="cta">
			<motion.div
				className="cta-info"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h3 variants={variants}>
					Uncover Property Opportunities
				</motion.h3>
				<motion.p variants={variants}>
					Explore our extensive selection of land options, ranging
					from residential to commercial. Find the perfect plot to
					suit your needs and aspirations
				</motion.p>
				<div>
					<Link href={"/properties"}>
						<motion.button variants={variants}>
							<p>See Properties</p>
						</motion.button>
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default Cta;
