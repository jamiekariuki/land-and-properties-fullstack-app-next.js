"use client";
import React from "react";
import "./tag.two.scss";
import { BsBuildings } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const list = [
	{
		icon: <BsBuildings className="tag-2-icon" />,
		title: "Opportunity",
		paragraph: "Every plot holds potential for transformation",
	},
	{
		icon: <BsCalendar3 className="tag-2-icon" />,
		title: "Commitment",
		paragraph: "We prioritize efficiency and timeliness in every endeavor.",
	},
	{
		icon: <BsBarChart className="tag-2-icon" />,
		title: "Consistency",
		paragraph: "Our track record speaks of unwavering reliability.",
	},
	{
		icon: <BsClipboardCheck className="tag-2-icon" />,
		title: "Assurance ",
		paragraph: "Trust is our foundation; your confidence, our priority",
	},
];

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,

		transition: {
			duration: 0.5,
			staggerChildren: 0.3,
		},
	},
};

const variants2 = {
	initial: {
		opacity: 0,
		y: 5,
	},
	animate: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.4,
			staggerChildren: 0.3,
		},
	},
};

const TagTwo = () => {
	return (
		<div className="tag-two">
			<motion.div
				className="tag-2-info"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<div className="tag-2-c">
					<motion.h6 variants={variants}> Get to Know Us</motion.h6>
					<motion.h3 variants={variants}>
						Discover the Heart of Our Company
					</motion.h3>
				</div>

				<div className="tag-2-c">
					<Link href={"/about-us"}>
						<motion.button variants={variants}>
							<p>Read More</p>
						</motion.button>
					</Link>
				</div>
			</motion.div>

			<motion.div
				className="tag-2"
				variants={variants2}
				initial="initial"
				whileInView="animate"
			>
				{list.map((item, index) => (
					<motion.div
						className="tag-2-box-container"
						key={index}
						variants={variants2}
					>
						<div className="tag-2-container">
							<div className="icon-container">{item.icon}</div>
							<h3>{item.title}</h3>
							<p>{item.paragraph}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default TagTwo;
