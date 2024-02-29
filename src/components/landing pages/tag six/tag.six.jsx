"use client";
import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
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

const TagSix = () => {
	return (
		<div style={{ width: "100%", marginTop: "40px" }}>
			<DoubleSPlit
				image={
					"https://i.postimg.cc/MG93YJNN/pexels-nico-becker-5850641.jpg"
				}
				content={
					<motion.div
						variants={variants}
						initial="initial"
						whileInView="animate"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<motion.h3 variants={variants}>
							Our Core Values
						</motion.h3>

						<ol>
							<motion.li variants={variants}>Integrity</motion.li>
							<motion.li variants={variants}>
								Customer Service Excellence
							</motion.li>
							<motion.li variants={variants}>
								Professionalism
							</motion.li>
							<motion.li variants={variants}>
								Entrepreneurship
							</motion.li>
							<motion.li variants={variants}>Teamwork</motion.li>
							<motion.li variants={variants}>
								Social Responsibility
							</motion.li>
						</ol>

						<motion.p variants={variants}>
							We uphold these principles in every interaction.
							With a focus on social responsibility and
							excellence, we aim to positively impact our clients,
							employees, and community.
						</motion.p>
					</motion.div>
				}
			/>
		</div>
	);
};

export default TagSix;
