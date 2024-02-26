"use client";
import React, { useEffect, useState } from "react";
import "./add.photo.scss";
import Modal from "@/components/styled components/modals/modal";
import { useToast } from "@/context/toastContext";
import { addGallery } from "@/lib/actions/gallery";
import { FileUploadDropZone } from "@/components/styled components/inputs/fileupload";
import Image from "next/image";

const AddPhoto = ({ open, onClose }) => {
	const { showToast } = useToast();

	const [error, setError] = useState("");
	const [picture, setPicture] = useState([]);
	const [success, setSuccess] = useState("");
	const [submiting, setSubmiting] = useState(false);

	useEffect(() => {
		if (success !== "") {
			showToast(success, "success");
			onClose();
			setPicture([]);
		} else if (error !== "") {
			showToast(error, "error");
		}
		setError("");
		setSuccess("");
	}, [success, error]);

	const onSubmit = () => {
		setSubmiting(true);
		//server action

		addGallery(picture).then((data) => {
			setError(data?.error);
			setSuccess(data?.success);
			setSubmiting(false);
		});
	};

	return (
		<Modal open={open} onClose={onClose} title={"Add Photo"}>
			<div className="add-photo">
				<div className="upload-dz">
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

				<form action={onSubmit}>
					<button disabled={submiting}>
						{submiting ? (
							<p>Submiting Photo...</p>
						) : (
							<p>Add Photo</p>
						)}
					</button>
				</form>
			</div>
		</Modal>
	);
};

export default AddPhoto;
