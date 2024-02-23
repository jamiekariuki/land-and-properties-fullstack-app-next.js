"use client";
import Notification from "../notifications/notifications";
import { DarkMode } from "../dark mode/dark.mode";
import "./account.menu.scss";
import Image from "next/image";

export default function AccountMenu() {
	return (
		<div className="account-menu">
			<DarkMode />
			<Notification />

			<div className="avatar-container">
				<Image
					className="avatar-image"
					src={
						"https://i.postimg.cc/y6gj5YXW/smiley-man-with-camera.jpg"
					}
					alt="avatar"
					fill={true}
				/>
			</div>
		</div>
	);
}
