"use client";
import React, { useState } from "react";
import "./users.overview.scss";
import Button from "@mui/material/Button";
//import AddUser from "./add user/add.user";
import DeleteAllUser from "./delete all user/delete.all.user";
import { BsTrashFill } from "react-icons/bs";
//import { BsFillPersonPlusFill } from "react-icons/bs";

const UsersOverview = ({ count }) => {
	/* const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	}; */

	const [open2, setOpen2] = useState(false);
	const onClose2 = () => {
		setOpen2(false);
	};

	return (
		<div className="users-overview">
			<div className="totals">
				<div className="totals-title">
					<h4>Total users:</h4>
				</div>
				<div className="totals-data">
					<h3>{count}</h3>
				</div>
			</div>

			<div className="users-buttons">
				{/* <Button
					variant="outlined"
					size="small"
					startIcon={<BsFillPersonPlusFill className="user-icons" />}
					onClick={() => {
						setOpen(true);
					}}
				>
					<h6 className="user-h6">ADD USER</h6>
				</Button>
				<AddUser open={open} onClose={onClose} /> */}

				<Button
					variant="contained"
					disableElevation
					color="error"
					size="small"
					startIcon={<BsTrashFill className="user-icons" />}
					onClick={() => {
						setOpen2(true);
					}}
				>
					<p className="user-p">DELETE ALL</p>
				</Button>
				<DeleteAllUser open={open2} onClose={onClose2} />
			</div>
		</div>
	);
};

export default UsersOverview;
