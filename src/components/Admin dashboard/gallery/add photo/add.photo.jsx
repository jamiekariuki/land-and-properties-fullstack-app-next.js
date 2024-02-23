import React from "react";
import "./add.photo.scss";
import { BsFillImageFill } from "react-icons/bs";
import Modal from "@/components/styled components/modals/modal";

const AddPhoto = ({ open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose} title={"Add Photo"}>
			<div className="add-photo">
				<div className="add-photo-cont">
					<div className="icon-container">
						<BsFillImageFill className="upload-icon" />
					</div>

					<p>
						Drag & Drop or <span>Browse</span> <br /> your Media
						files
					</p>
				</div>
			</div>
		</Modal>
	);
};

export default AddPhoto;
