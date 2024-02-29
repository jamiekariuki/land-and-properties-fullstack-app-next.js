"use client";
import React from "react";
import "./navigations.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthLogout } from "@/lib/actions/auth/logout";

const Navigations = ({
	icon,
	text,
	link,
	sideBar,
	handleMobileSidebarToggle,
}) => {
	const pathname = usePathname();

	if (link) {
		return (
			<Link href={link}>
				<button
					className="general-links"
					onClick={handleMobileSidebarToggle}
					style={{
						backgroundColor: pathname === link && "#e82e59",
					}}
				>
					<div
						className={
							sideBar
								? "side-bar-icon side-bar-icon-collapse"
								: "side-bar-icon"
						}
					>
						<div
							className={
								pathname === link ? "link-color" : "link"
							}
						>
							{icon}
						</div>
					</div>

					{!sideBar && (
						<h5
							className="h5text"
							style={{
								color: pathname === link && "white",
							}}
						>
							{text}
						</h5>
					)}
				</button>
			</Link>
		);
	} else {
		return (
			<form action={AuthLogout}>
				<button
					className="general-links"
					onClick={handleMobileSidebarToggle}
					style={{
						backgroundColor: pathname === link && "#e82e59",
					}}
				>
					<div
						/* style={{ border: "0", backgroundColor: "transparent" }} */
						className={
							sideBar
								? "side-bar-icon side-bar-icon-collapse"
								: "side-bar-icon"
						}
					>
						<div
							className={
								pathname === link ? "link-color" : "link"
							}
						>
							{icon}
						</div>
					</div>

					{!sideBar && (
						<h5
							className="h5text"
							style={{
								color: pathname === link && "white",
							}}
						>
							{text}
						</h5>
					)}
				</button>
			</form>
		);
	}
};

export default Navigations;
