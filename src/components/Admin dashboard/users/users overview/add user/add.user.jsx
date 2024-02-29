"use client";
import React, { useState } from "react";
import "./add.user.scss";
import Modal from "@/components/styled components/modals/modal";
import Image from "next/image";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import SelectOption from "@/components/styled components/inputs/select.option";

const AddUser = ({ open, onClose }) => {
	const isSuperAdmin = true;

	const initialUserData = {
		profilePicture: "",
		username: "",
		email: "",
		role: "user",
		ipAddress: "",
	};

	const [userData, setUserData] = useState(initialUserData);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		/* call api here */

		onClose();
	};

	const roles = ["user", "admin", "super admin"];

	if (isSuperAdmin) {
		return (
			<Modal open={open} onClose={onClose}>
				<div className="user-edit">
					<div className="form-group-profile">
						<label htmlFor="profilePicture">
							<div className="profile-wrapper-input">
								<Image
									className="profile-image-input"
									src="https://i.postimg.cc/fTkF2P9H/download.jpg"
									alt="avatar"
									fill={true}
								/>
								<input
									type="file"
									id="profilePicture"
									name="profilePicture"
									value={userData.profilePicture}
									onChange={handleInputChange}
									hidden
								/>

								<div className="upload-text">
									<h6>
										Upload <br /> Photo
									</h6>
								</div>
							</div>
						</label>
					</div>

					<div className="edituser-form">
						<h6>Name</h6>
						<Inputs2
							/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
							type={"text"}
							label={"Name"}
							id={"edituser-name"}
							value={initialUserData.username}
							borderRadius={true}

							/* changeValue={(e) => {
									handleChange("title", e);
								}} */
						/>
					</div>

					<div className="edituser-form">
						<h6>Email</h6>
						<Inputs2
							/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
							type={"text"}
							label={"Email"}
							id={"edituser-email"}
							value={initialUserData.email}
							borderRadius={true}

							/* changeValue={(e) => {
									handleChange("title", e);
								}} */
						/>
					</div>

					<div className="edituser-form">
						<p>Role</p>
						<SelectOption
							label={"Role"}
							list={roles}
							value={initialUserData.role}
							borderRadius={true}
							/* changeValue={(e) => {
							setAiLevel(e);
						}} */
						/>
					</div>

					<button type="submit">
						<p>submit</p>
					</button>
				</div>
			</Modal>
		);
	} else {
		return (
			<Modal open={open} onClose={onClose}>
				<div className="user-edit-decline">
					<div className="warning-container">
						<p className="decline-p">
							Sorry only Super Admins can add a User
						</p>
					</div>
					<div className="decline-button-container">
						<button onClick={onClose}>
							<p>OK</p>
						</button>
					</div>
				</div>
			</Modal>
		);
	}
};

export default AddUser;
