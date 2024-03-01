"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { IoIosLogOut } from "react-icons/io";
import { IoIosPodium } from "react-icons/io";
import Image from "next/image";
import { AuthLogout } from "@/lib/actions/auth/logout";
import Link from "next/link";

export default function AccountMenu2({ user }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<React.Fragment>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
					>
						<Avatar sx={{ width: 35, height: 35 }}>
							<div
								style={{
									width: "35px",
									height: "35px",
									border: "50%",
									position: "relative",
								}}
							>
								<Image
									style={{ objectFit: "cover" }}
									alt="gallery-image"
									src={
										user?.image
											? user?.image
											: "https://i.postimg.cc/fTkF2P9H/download.jpg"
									}
									fill={true}
									quality={20}
								/>
							</div>
						</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						border: "1px solid ",
						borderColor: "transparent",
						/* borderRadius: 2, */
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				{/* <MenuItem onClick={handleClose}>
					<Avatar />
					<h5>Profile</h5>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Avatar />
					<h5>My account</h5>
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<PersonAdd fontSize="small" />
					</ListItemIcon>
					<h5>Add account</h5>
				</MenuItem> */}
				{user?.role !== "user" && (
					<Link href={"dashboard/users"}>
						<MenuItem onClick={handleClose}>
							<ListItemIcon>
								<IoIosPodium style={{ fontSize: "25px" }} />
							</ListItemIcon>
							<p style={{ fontSize: "17px" }}>Dashboard</p>
						</MenuItem>
					</Link>
				)}

				<form action={AuthLogout}>
					<button
						style={{
							width: "100%",
							height: "100%",
							border: "0",
							backgroundColor: "transparent",
						}}
					>
						<MenuItem onClick={handleClose}>
							<ListItemIcon>
								<IoIosLogOut style={{ fontSize: "25px" }} />
							</ListItemIcon>

							<p style={{ fontSize: "17px" }}>Logout</p>
						</MenuItem>
					</button>
				</form>
			</Menu>
		</React.Fragment>
	);
}
