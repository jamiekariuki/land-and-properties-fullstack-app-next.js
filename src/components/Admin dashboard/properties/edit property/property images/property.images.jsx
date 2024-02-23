import Image from "next/image";
import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import "./property.images.scss";
import { BsTrashFill } from "react-icons/bs";

const EditPropertyImages = ({ picture }) => {
	return (
		<div className="edit-property-images">
			<div className="edit-pi">
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
				{picture.map((item, index) => (
					<div className="property-edit-cont" key={index}>
						<div className="p-edit-backdrop">
							<BsTrashFill className="delete-pi" />
						</div>
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
		</div>
	);
};

export default EditPropertyImages;
