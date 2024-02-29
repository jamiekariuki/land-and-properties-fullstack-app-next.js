import { PropertiesData } from "@/components/properties pages/properties/property";
import Image from "next/image";
import React from "react";
import "./property.images.scss";
import { FileUploadDropZone } from "@/components/styled components/inputs/fileupload";

const PropertyImages = ({ picture, setPicture }) => {
	return (
		<div className="property-images">
			<div className="add-pi">
				<FileUploadDropZone Image={picture} setImage={setPicture} />
			</div>
			{picture.length > 0 && (
				<div className="all-pi">
					{picture.map((item, index) => (
						<div className="property-add-cont" key={index}>
							<Image
								alt="property image"
								src={item}
								fill={true}
								className="ad-p-image"
								quality={100}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PropertyImages;
