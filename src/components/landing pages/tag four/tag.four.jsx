"use client";
import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const variants = {
	initial: {
		opacity: 0,
		x: -6,
	},
	animate: {
		opacity: 1,
		x: 0,

		transition: {
			duration: 0.5,
			staggerChildren: 0.4,
		},
	},
};

const TagFour = () => {
	return (
		<div style={{ width: "100%", marginTop: "40px" }}>
			<DoubleSPlit
				image={
					"https://i.postimg.cc/4xnF1brw/Whats-App-Image-2024-02-02-at-20-56-26.jpg"
				}
				content={
					<motion.div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
						variants={variants}
						initial="initial"
						whileInView="animate"
					>
						<motion.h3 variants={variants}>
							Our Strategic Approach
						</motion.h3>
						<motion.p variants={variants}>
							Explore our distinctive methodology, built on strong
							networks and valued partnerships with government
							ministries, competent lawyers, and leading financial
							providers like KCB Bank and Cooperative Bank of
							Kenya. Through patronage and excellent customer
							treatment, we've fostered a community of satisfied
							clients, driving the growth of Peculiarmarc Ventures
							Limited. Click to delve deeper into how our approach
							sets us apart
						</motion.p>

						<div>
							<Link href={"./about-us"}>
								<motion.button variants={variants}>
									<p>Read More</p>
								</motion.button>
							</Link>
						</div>
					</motion.div>
				}
				flexReverse={true}
			/>
		</div>
	);
};

export default TagFour;
