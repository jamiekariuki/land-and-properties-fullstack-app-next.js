"use client";
import React, { useState } from "react";
import "./fileupload.scss";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import { useToast } from "@/context/toastContext";
import Image from "next/image";
import "@uploadthing/react/styles.css";

export const ImageUpload = ({ defaultAvatar, setImage }) => {
	const [avatar, setAvatar] = useState(
		defaultAvatar
			? defaultAvatar
			: "https://i.postimg.cc/fTkF2P9H/download.jpg"
	);

	const { showToast } = useToast();

	return (
		<main className="upload-files">
			<UploadButton
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					showToast("Upload Completed", "success");
					setAvatar(res[0].url);
					setImage(res[0].url);
				}}
				onUploadError={(error) => {
					showToast("Failed to upload", "error");
				}}
				appearance={{
					button({ ready, isUploading }) {
						return `custom-button ${
							ready
								? "custom-button-ready"
								: "custom-button-not-ready"
						} ${isUploading ? "custom-button-uploading" : ""}`;
					},
					container: "custom-container",
					allowedContent: "custom-allowed-content",
				}}
			/>
			<Image
				className="profile-image-input"
				src={avatar}
				alt="avatar"
				fill={true}
			/>

			<div className="upload-text">
				<h6>
					Upload <br /> Photo
				</h6>
			</div>
		</main>
	);
};

export const FileUploadDropZone = ({ image, setImage }) => {
	const { showToast } = useToast();

	return (
		<main className="upload-dropzone">
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					showToast("Upload Completed", "success");
					const newImageUrls = res.map((item) => item.url);
					setImage((prevImage) => [...prevImage, ...newImageUrls]);
				}}
				onUploadError={(error) => {
					showToast("Failed to upload", "error");
				}}
				appearance={{
					button({ ready, isUploading }) {
						return `custom-button ${
							ready
								? "custom-button-ready"
								: "custom-button-not-ready"
						} ${isUploading ? "custom-button-uploading" : ""}`;
					},
					container: "custom-container",
					allowedContent: "custom-allowed-content",
					uploadIcon: "custom-icon",
				}}
			/>
		</main>
	);
};
