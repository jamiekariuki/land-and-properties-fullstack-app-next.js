import Image from "next/image";
import React, { useState } from "react";
import "./message.property.scss";

const MessageProperty = ({ item }) => {
	const [pic, setPic] = useState(0);
	return (
		<div className="message-property">
			<div className="pt-slider-container">
				<div className="pt-image-container">
					<Image
						src={item.picture[pic]}
						alt="property photo"
						fill={true}
						className="pt-property-image"
					/>
				</div>

				<div className="pt-slider-navs">
					{item.picture.map((data, index) => (
						<div
							key={index}
							className="pt-dot"
							onClick={() => {
								setPic(index);
							}}
						>
							<Image
								src={data}
								alt="property photo"
								fill={true}
								className="dot-image"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MessageProperty;
