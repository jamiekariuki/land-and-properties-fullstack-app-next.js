import React from "react";
import "./tag.two.scss";
import { BsBuildings } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";

const list = [
	{
		icon: <BsBuildings className="tag-2-icon" />,
		title: "officia",
		paragraph:
			"Quam delectus quae ducimus aliquam sint  officia impedit qui odi",
		color: "red",
	},
	{
		icon: <BsCalendar3 className="tag-2-icon" />,
		title: "impedit",
		paragraph: "Lorem  elit.Quam delectus deserunt officia impedit qui odi",
		color: "blue",
	},
	{
		icon: <BsBarChart className="tag-2-icon" />,
		title: "title",
		paragraph: "Lorem i elit.Quam  beatae deserunt officia impedit qui odi",
		color: "green",
	},
	{
		icon: <BsClipboardCheck className="tag-2-icon" />,
		title: "deserunt ",
		paragraph:
			"Lorem iectu  dgfdh dfgdgdf  a deserunt officia impedit qui odi",
		color: "yellow",
	},
];

const TagTwo = () => {
	return (
		<div className="tag-two">
			<div className="tag-2-info">
				<div className="tag-2-c">
					<h6>Lorem ipsum, dolor sit amet</h6>
					<h3>Dolor sit amet adipisicing</h3>
				</div>

				<div className="tag-2-c">
					<button>
						<p>Read More</p>
					</button>
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
