import React from "react";
import "./tag.two.scss";
import { BsBuildings } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import Link from "next/link";

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

const TagTwo = () => {
	return (
		<div className="tag-two">
			<div className="tag-2-info">
				<div className="tag-2-c">
					<h6>Get to Know Us</h6>
					<h3>Discover the Heart of Our Company</h3>
				</div>

				<div className="tag-2-c">
					<Link href={"/about-us"}>
						<button>
							<p>Read More</p>
						</button>
					</Link>
				</div>
			</div>

			<div className="tag-2">
				{list.map((item, index) => (
					<div className="tag-2-box-container" key={index}>
						<div className="tag-2-container">
							<div className="icon-container">{item.icon}</div>
							<h3>{item.title}</h3>
							<p>{item.paragraph}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TagTwo;
