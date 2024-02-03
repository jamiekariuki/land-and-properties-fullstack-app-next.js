import React from "react";
import "./tag.five.scss";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const TagFive = () => {
	const property = [
		{
			title: "Title",
			sub: "sub tile any thing",
			image: "https://i.postimg.cc/bvk6NJpy/pexels-tom-fisk-5972213.jpg",
		},
		{
			title: "Title",
			sub: "sub tile any thing",
			image: "https://i.postimg.cc/K4XPW6s9/village-view-from.jpg",
		},
		{
			title: "Title",
			sub: "sub tile any thing",
			image: "https://i.postimg.cc/3JSs6nKg/pexels-arthouse-studio-4326847.jpg",
		},
	];

	return (
		<div className="tag-5">
			<div className="tag-5-info">
				<div className="t5-left">
					<h3>Sub tile any thing</h3>
				</div>
				<div className="t5-right">
					<div className="count-cont">
						<h3>249 +</h3>
						<p>Lorem ipsum dolor sit, amet consectetur</p>
					</div>
					<div className="count-cont">
						<h3> 60%</h3>
						<p>Lorem ipsum dolor sit, amet consectetur</p>
					</div>
					<div className="count-cont">
						<h3>489</h3>
						<p>Lorem ipsum dolor sit, amet consectetur</p>
					</div>
				</div>
			</div>
			<div className="tag-5-images">
				{property.map((data, index) => (
					<div key={index} className="tag-5-card-container">
						<Image
							src={data.image}
							alt="property photo"
							fill={true}
							className="tag-5-property-image"
						/>

						<div className="backdrop-container">
							<div className="backdrop-details">
								<h3>{data.title}</h3>

								<div className="sub">
									<h5>
										{data.sub
											.split(" ")
											.slice(0, 10)
											.join(" ")}
										{data.sub.split(" ").length > 10 &&
											" ..."}
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
