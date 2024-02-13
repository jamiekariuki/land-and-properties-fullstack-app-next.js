"use client";
import React from "react";
import "./tag.five.scss";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { PropertiesData } from "@/components/properties pages/properties/property";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const variants = {
	initial: {
		opacity: 0,
		y: 6,
	},
	animate: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.5,
			staggerChildren: 0.5,
		},
	},
};

const variants2 = {
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

const TagFive = () => {
	return (
		<motion.div
			className="tag-5"
			variants={variants2}
			initial="initial"
			whileInView="animate"
		>
			<motion.div
				className="tag-5-info"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<div className="t5-left">
					<motion.h3 variants={variants}>
						Our Real Estate Influence
					</motion.h3>
				</div>
				<div className="t5-right">
					<motion.div className="count-cont" variants={variants}>
						<VisibilitySensor>
							{({ isVisible }) => (
								<CountUp
									start={80}
									end={120}
									duration={6}
									redraw={true}
									decimals={0}
									prefix=""
									suffix="+"
									delay={0.5}
								>
									{({ countUpRef }) => (
										<h3 ref={countUpRef}></h3>
									)}
								</CountUp>
							)}
						</VisibilitySensor>
						<p>Transformed landscapes for delighted homeowners</p>
					</motion.div>
					<motion.div className="count-cont" variants={variants}>
						<VisibilitySensor>
							{({ isVisible }) => (
								<CountUp
									start={60}
									end={96}
									duration={6}
									redraw={true}
									decimals={0}
									prefix=""
									suffix="%"
									delay={0.5}
								>
									{({ countUpRef }) => (
										<h3 ref={countUpRef}></h3>
									)}
								</CountUp>
							)}
						</VisibilitySensor>
						<p>Homebuyers who found their dream property with us</p>
					</motion.div>
					<motion.div className="count-cont" variants={variants}>
						<VisibilitySensor>
							{({ isVisible }) => (
								<CountUp
									start={70}
									end={100}
									duration={6}
									redraw={true}
									decimals={0}
									prefix=""
									suffix="+"
									delay={0.5}
								>
									{({ countUpRef }) => (
										<h3 ref={countUpRef}></h3>
									)}
								</CountUp>
							)}
						</VisibilitySensor>
						<p>Properties sold to satisfied clients and counting</p>
					</motion.div>
				</div>
			</motion.div>

			<motion.div className="tag-5-t" variants={variants2}>
				<h3>Popular Properties</h3>
			</motion.div>

			<div className="tag-5-images">
				{PropertiesData.slice(0, 3).map((data, index) => (
					<motion.div
						key={index}
						className="tag-5-card-container"
						variants={variants2}
					>
						<Image
							src={data.picture[0]}
							alt="property photo"
							fill={true}
							className="tag-5-property-image"
						/>

						<div className="backdrop-container">
							<div className="backdrop-details">
								<h3>{data.location}</h3>

								<div className="sub">
									<h5>
										{data.description
											.split(" ")
											.slice(0, 10)
											.join(" ")}
										{data.description.split(" ").length >
											10 && " ..."}
									</h5>
								</div>

								<div>
									<button>
										<p>View</p>
										<BsArrowRight className="tag-5-icon" />
									</button>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default TagFive;
