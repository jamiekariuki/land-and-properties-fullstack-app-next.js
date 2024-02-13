"use client";

import React from "react";
import "./tag.five.scss";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { PropertiesData } from "@/components/properties pages/properties/property";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const TagFive = () => {
	return (
		<div className="tag-5">
			<div className="tag-5-info">
				<div className="t5-left">
					<h3>Our Real Estate Influence</h3>
				</div>
				<div className="t5-right">
					<div className="count-cont">
						{/* <h3>120 +</h3> */}
						<VisibilitySensor>
							{({ isVisible }) => (
								<CountUp
									start={0}
									end={120}
									duration={7}
									redraw={true}
									decimals={0}
									prefix=""
									suffix="+"
									delay={0}
								>
									{({ countUpRef }) => (
										<h3 ref={countUpRef}></h3>
									)}
								</CountUp>
							)}
						</VisibilitySensor>
						<p>Transformed landscapes for delighted homeowners</p>
					</div>
					<div className="count-cont">
						<VisibilitySensor>
							{({ isVisible }) => (
								<CountUp
									start={0}
									end={96}
									duration={7}
									redraw={true}
									decimals={0}
									prefix=""
									suffix="%"
									delay={0}
								>
									{({ countUpRef }) => (
										<h3 ref={countUpRef}></h3>
									)}
								</CountUp>
							)}
						</VisibilitySensor>
						<p>Homebuyers who found their dream property with us</p>
					</div>
					<div className="count-cont">
						<VisibilitySensor>
							{({ isVisible }) => (
								<CountUp
									start={0}
									end={100}
									duration={7}
									redraw={true}
									decimals={0}
									prefix=""
									suffix="+"
									delay={0}
								>
									{({ countUpRef }) => (
										<h3 ref={countUpRef}></h3>
									)}
								</CountUp>
							)}
						</VisibilitySensor>
						<p>Properties sold to satisfied clients and counting</p>
					</div>
				</div>
			</div>

			<div className="tag-5-t">
				<h3>Popular Properties</h3>
			</div>

			<div className="tag-5-images">
				{PropertiesData.slice(0, 3).map((data, index) => (
					<div key={index} className="tag-5-card-container">
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
					</div>
				))}
			</div>
		</div>
	);
};

export default TagFive;
