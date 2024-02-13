"use client";
import React from "react";
import "./about.tag.one.scss";
import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
import Cta from "@/components/landing pages/cta/cta";
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
			staggerChildren: 0.4,
		},
	},
};

const variants2 = {
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

const variants3 = {
	initial: {
		opacity: 0,
		x: 6,
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

const variants4 = {
	initial: {
		opacity: 0,
		y: 6,
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

const variants5 = {
	initial: {
		opacity: 0,
		x: 6,
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

const variants6 = {
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

const AboutTagOne = () => {
	return (
		<div className="about-tag-one">
			<motion.div
				className="about-1"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h3 variants={variants}>
					Our Commitment to Excellence
				</motion.h3>
				<motion.p variants={variants}>
					At Peculiarmarc Ventures Limited, excellence is not just a
					goal, it's our standard. Learn more about our unwavering
					commitment to quality
				</motion.p>
				<motion.h6 variants={variants}>
					contact us: +254 701 944 155{" "}
				</motion.h6>
			</motion.div>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
				}
				content={
					<motion.div
						variants={variants2}
						initial="initial"
						whileInView="animate"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<motion.h3 variants={variants2}>About US</motion.h3>
						<motion.p variants={variants2}>
							Peculiarmarc ventures limited is one of the leading
							brands in the Kenyan real estate sector. Our main
							objecve is to empower property investors and
							transform the society.
							<br /> Peculiarmarc is on course to acquire and add
							value to land, which are parcularly enhanced to suit
							immediate residenal selement, commercial
							Agricultural purposes and futurisc capital gain.
							Peculiarmarc is a one-stop shop offering an
							opportunity for Land & home ownership soluons to its
							customers.
						</motion.p>
					</motion.div>
				}
				flexReverse={true}
			/>

			<div className="a-tag-second">
				<DoubleSPlit
					image={
						"https://i.postimg.cc/Zqx3BXVQ/Whats-App-Image-2024-02-02-at-20-58-32.jpg"
					}
					content={
						<motion.div
							style={{ padding: "15px" }}
							variants={variants3}
							initial="initial"
							whileInView="animate"
						>
							<motion.h3 variants={variants3}>
								Our Mission
							</motion.h3>
							<motion.p variants={variants3}>
								To provide an outstanding level of service,
								excellence and expertise in the real estate
								market to our clients. To always bear in mind
								that behind every real estate transaction, there
								is always a person’s sweat or family’s future
								involved.
								<br /> To act in the best interest of our
								clients at all times, by offering unquestionable
								ethics on all transactions and to develop
								long-lasting relationships with our clients by
								offering exceptional service and utmost customer
								satisfaction.
							</motion.p>
						</motion.div>
					}
					fill={true}
				/>
			</div>

			<motion.div
				className="about-1"
				variants={variants4}
				initial="initial"
				whileInView="animate"
			>
				<motion.h3 variants={variants4}>Our Vision</motion.h3>
				<motion.p variants={variants4}>
					The satisfaction of our customers is the main priority of
					Peculiarmarc Ventures Limited. Our goal is to be a one stop
					shop for everything Real estate & a point of reference in
					everything related to Real Estate. To make the Real Estate
					buying and selling of property as cost effective as possible
					while maintaining the highest level of service.
					<br /> Along with providing accurate and up-to-date
					information, skilled analysis and sound real estate advice
					and to continually explore new ideas and technology, to make
					the selling and buying of real estate faster, less costly
					and easier
				</motion.p>
			</motion.div>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/m2nSTx5N/Whats-App-Image-2024-02-02-at-17-24-47-2.jpg"
				}
				content={
					<motion.div
						variants={variants5}
						initial="initial"
						whileInView="animate"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<motion.h3 variants={variants5}>Why Us</motion.h3>

						<motion.p variants={variants5}>
							Peculiarmarc ventures limited delivers real estate
							soluons at personalized level and is a market leader
							in providing lands and plots for sale at reasonable
							and affordable price.
						</motion.p>

						<ol>
							<motion.li variants={variants5}>
								We add value on our properes.
							</motion.li>
							<motion.li variants={variants5}>
								We ensure promptness in tle deed processing.
							</motion.li>
							<motion.li variants={variants5}>
								We offer excellent customer service.
							</motion.li>
							<motion.li variants={variants5}>
								We create job opportunies.
							</motion.li>
							<motion.li variants={variants5}>
								We give back to the community through our CSR
								acvies.
							</motion.li>
						</ol>
					</motion.div>
				}
				flexReverse={true}
			/>
			<div style={{ height: "20px" }} />
			<DoubleSPlit
				image={
					"https://i.postimg.cc/Pq8w4Lf0/Whats-App-Image-2024-02-02-at-01-31-54.jpg"
				}
				content={
					<motion.div
						variants={variants6}
						initial="initial"
						whileInView="animate"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<motion.h3 variants={variants6}>
							Working Methodology
						</motion.h3>

						<motion.p variants={variants6}>
							Peculiarmarc ventures limited works through stable
							business networks and has a very well-established
							network with government relevant ministries. We have
							an excellent network with competent lawyers in
							Kenya. We work with various financial providers
							including KCB Bank & Cooperave Bank of Kenya. We
							work through patronage buying and treang all our
							current customers well. This leads to much post
							purchase referrals and thus the growth of our
							company. We value all our customers regardless of
							their status.
						</motion.p>
					</motion.div>
				}
			/>

			<Cta />
		</div>
	);
};

export default AboutTagOne;
