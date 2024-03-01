"use client";
//import Notification from "../notifications/notifications";
import { DarkMode } from "../dark mode/dark.mode";
import "./account.menu.scss";
import Image from "next/image";

export default function AccountMenu({ user }) {
	return (
		<div className="account-menu">
			<DarkMode />
			{/* <Notification /> */}

			<div className="avatar-container">
				<Image
					className="avatar-image"
					src={
						user?.image
							? user?.image
							: "https://i.postimg.cc/fTkF2P9H/download.jpg"
					}
					alt="avatar"
					fill={true}
				/>
			</div>
		</div>
	);
}
