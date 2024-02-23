"use client";
import React, { useState } from "react";
import "./gallery.scss";
import Button from "@mui/material/Button";
import { IoMdAdd } from "react-icons/io";
import { PropertiesData } from "@/components/properties pages/properties/property";
import { BsTrashFill } from "react-icons/bs";
import AddPhoto from "./add photo/add.photo";
import Image from "next/image";

const DashboardGallery = () => {
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};
	return (
		<div className="d-gallery">
			<div className="d-gallery-header">
				<div></div>

				<Button
					variant="contained"
					size="small"
					startIcon={<IoMdAdd className="ap-icons" />}
					onClick={() => {
						setOpen(true);
					}}
				>
					<h6 className="user-h6">add photo</h6>
				</Button>
			</div>

			<div className="d-gallery-container">
				<div
					className={
						PropertiesData.length > 2
							? "ap-prop ap-prop2"
							: "ap-prop"
					}
				>
					{PropertiesData.map((item, index) => (
						<div className="d-gallery-box" key={index}>
							<div className="p-edit-backdrop">
								<BsTrashFill className="delete-pi" />
							</div>
							<Image
								alt="gallery image"
								src={item.picture[0]}
								fill={true}
								className="d-gallery-image"
								quality={100}
							/>
						</div>
					))}

					<div
						className="d-gallery-box-add"
						onClick={() => {
							setOpen(true);
						}}
					>
						<div className="tb-add">
							<IoMdAdd className="tb-add" />
							<h4>add photo</h4>
						</div>
					</div>

					<AddPhoto open={open} onClose={onClose} />
				</div>
			</div>
		</div>
	);
};

export default DashboardGallery;
