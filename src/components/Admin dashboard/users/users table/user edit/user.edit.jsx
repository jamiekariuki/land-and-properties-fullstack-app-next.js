"use client";
import React, { useEffect, useState } from "react";
import "./user.edit.scss";
import Modal from "@/components/styled components/modals/modal";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import { SelectOption } from "@/components/styled components/inputs/select.option";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/context/toastContext";
import { AuthSchema } from "@/utils/validators/authentication/auth.schema";
import { updateUser } from "@/lib/actions/users";
import { ImageUpload } from "@/components/styled components/inputs/fileupload";

const UserEdit = ({ open, onClose, user }) => {
	const isSuperAdmin = true;

	const roles = ["user", "admin", "super admin"];

	const { showToast } = useToast();

	const [error, setError] = useState("");
	const [picture, setPicture] = useState("");
	const [submiting, setSubmiting] = useState(false);
	const [success, setSuccess] = useState("");

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(AuthSchema),
		defaultValues: user,
	});

	useEffect(() => {
		if (success !== "") {
			showToast(success, "success");
			setPicture("");
			//redirect here
		} else if (error !== "") {
			showToast(error, "error");
		}
		setError("");
		setSuccess("");
	}, [success, error]);

	const onSubmit = (data) => {
		setSubmiting(true);
		//server action
		data.image = picture;
		updateUser(user._id, data).then((data) => {
			setError(data?.error);
			setSuccess(data?.success);
			setSubmiting(false);
		});
	};

	if (isSuperAdmin) {
		return (
			<Modal open={open} onClose={onClose} title={"Edit user"}>
				<form className="user-edit" onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group-profile">
						<ImageUpload
							defaultAvatar={user.image}
							setImage={setPicture}
						/>
					</div>

					<div className="edituser-form">
						<h6>Email</h6>
						<Inputs2
							error={errors.email?.message}
							register={register}
							name={"email"}
							type={"text"}
							label={"Email"}
							id={"edituser-email"}
							borderRadius={true}
						/>
					</div>

					<div className="edituser-form">
						<p>Role</p>
						<SelectOption
							error={errors.role?.message}
							register={register}
							name={"role"}
							label={"Role"}
							list={roles}
							borderRadius={true}
						/>
					</div>

					<button disabled={submiting}>
						{submiting ? <p>Updating...</p> : <p>Update</p>}
					</button>
				</form>
			</Modal>
		);
	} else {
		return (
			<Modal open={open} onClose={onClose}>
				<div className="user-edit-decline">
					<div className="warning-container">
						<p className="decline-p">
							Sorry only Super Admins can edit users profile
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

export default UserEdit;
