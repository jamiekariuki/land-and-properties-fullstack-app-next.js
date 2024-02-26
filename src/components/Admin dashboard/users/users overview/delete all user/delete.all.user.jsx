import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./delete.all.user.scss";
import Modal from "@/components/styled components/modals/modal";
import { deleteAllUser } from "@/lib/actions/users";

const DeleteAllUser = ({ open, onClose }) => {
	const deleteAll = () => {
		deleteAllUser();
	};
	return (
		<Modal open={open} onClose={onClose}>
			<div className="user-delete">
				<div className="delete-container">
					<Alert severity="warning">
						<AlertTitle className="warning-title">
							Warning!
						</AlertTitle>
						This action cannot be reversed —
						<strong>
							All Users Account will be deleted parmanetly
						</strong>
					</Alert>
				</div>
				<div className="delete-button-container">
					<form action={deleteAll}>
						<button onClick={onClose}>
							<p>Proceed</p>
						</button>
					</form>
					<button onClick={onClose} className="decline-button">
						<p>Decline</p>
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteAllUser;
