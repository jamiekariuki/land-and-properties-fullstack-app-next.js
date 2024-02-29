import Image from "next/image";
import React from "react";
import "./property.images.scss";
import { BsTrashFill } from "react-icons/bs";
import { FileUploadDropZone } from "@/components/styled components/inputs/fileupload";

const EditPropertyImages = ({ picture, setPicture }) => {
	const handleImageClick = (index) => {
		setPicture((prevImage) => prevImage.filter((_, i) => i !== index));
	};

	return (
		<div className="edit-property-images">
			<div className="edit-pi">
				<FileUploadDropZone Image={picture} setImage={setPicture} />
			</div>
			{picture.length > 0 && (
				<div className="all-pi">
					{picture.map((item, index) => (
						<div className="property-edit-cont" key={index}>
							<div className="p-edit-backdrop">
								<BsTrashFill
									className="delete-pi"
									onClick={() => handleImageClick(index)}
								/>
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
			)}
		</div>
	);
};

export default EditPropertyImages;
