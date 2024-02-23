import { PropertiesData } from "@/components/properties pages/properties/property";
import Image from "next/image";
import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import "./property.images.scss";

const PropertyImages = () => {
	return (
		<div className="property-images">
			<div className="add-pi">
				<div className="input-upload">
					<div className="icon-container">
						<BsFillImageFill className="upload-icon" />
					</div>

					<p>
						Drag & Drop or <span>Browse</span> <br /> your Media
						files
					</p>
				</div>
			</div>
			<div className="all-pi">
				{/* {PropertiesData.map((item, index) => (
					<div className="property-add-cont" key={index}>
						<Image
							alt="property image"
							src={item.picture[0]}
							fill={true}
							className="ad-p-image"
							quality={100}
						/>
					</div>
				))} */}
			</div>
		</div>
	);
};

export default PropertyImages;
