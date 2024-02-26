"use client";
import React, { useEffect, useState } from "react";
import "./users.table.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import UserEdit from "./user edit/user.edit";
import UserDelete from "./user delete/user.delete";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

const columns = [
	{ field: "_id", headerName: "ID", width: 100 },
	{
		field: "image",
		headerName: "Profile",
		width: 100,
		renderCell: (params) => {
			return (
				<div className="profile-wrapper">
					<Image
						className="profile-image"
						src={
							params.row.image
								? params.row.image
								: "https://i.postimg.cc/fTkF2P9H/download.jpg"
						}
						alt="avatar"
						fill={true}
					/>
				</div>
			);
		},
	},

	{
		field: "email",
		headerName: "Email",
		minWidth: 250,
		flex: 1,
		editable: false,
	},

	{
		field: "role",
		headerName: "Role",
		minWidth: 150,
		flex: 1,
		renderCell: (params) => {
			return (
				<div
					className={`user-profile-table ${
						params.row.role === "super admin"
							? "super-admin-table"
							: params.row.role === "admin"
							? "admin-table"
							: "user-table"
					}`}
				>
					<p>{params.row.role}</p>
				</div>
			);
		},
	},

	{
		field: "createdAt",
		headerName: "Joined on",
		minWidth: 100,
		flex: 1,
		editable: false,
		renderCell: (params) => {
			const createdAt = params.row.createdAt;
			const formattedDate = new Date(createdAt).toLocaleDateString();
			return formattedDate;
		},
	},

	{
		field: "edit",
		headerName: "Edit",
		width: 100,

		renderCell: function EditingAction(params) {
			const [open, setOpen] = useState(false);
			const onClose = () => {
				setOpen(false);
			};

			return (
				<>
					<IconButton
						aria-label="edit"
						//size="small"
						onClick={() => {
							setOpen(true);
						}}
					>
						<BsPencilSquare style={{ fontSize: "17px" }} />
					</IconButton>
					{open && (
						<UserEdit
							open={open}
							onClose={onClose}
							user={params.row}
						/>
					)}
				</>
			);
		},
	},

	{
		field: "delete",
		headerName: "Delete",
		width: 100,
		renderCell: function DeletingAction(params) {
			const [open, setOpen] = useState(false);
			const onClose = () => {
				setOpen(false);
			};

			return (
				<>
					<IconButton
						aria-label="delete"
						color="error"
						onClick={() => {
							setOpen(true);
						}}
					>
						<BsTrashFill style={{ fontSize: "17px" }} />
					</IconButton>

					{open && (
						<UserDelete
							open={open}
							onClose={onClose}
							id={params.row._id}
							username={params.row.email}
						/>
					)}
				</>
			);
		},
	},
];

export default function UsersTable({ users }) {
	return (
		<Box sx={{ height: "100%", width: "100%", padding: "10px" }}>
			<DataGrid
				className="users"
				rows={users}
				columns={columns}
				getRowId={(row) => row._id}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
					columns: {
						...users.initialState?.columns,
						columnVisibilityModel: {
							_id: false,
						},
					},
				}}
				slots={{ toolbar: GridToolbar }}
				slotProps={{
					toolbar: {
						showQuickFilter: true,
						quickFilterProps: {
							debounceMs: 500,
						},
					},
				}}
				pageSizeOptions={[10]}
				disablecheckboxSelection
				disableRowSelectionOnClick
				disableColumnSelector
				disableDensitySelector
				disableColumnFilter
				disableColumnMenu
			/>
		</Box>
	);
}
