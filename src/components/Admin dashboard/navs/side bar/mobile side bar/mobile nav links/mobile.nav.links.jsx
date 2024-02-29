"use client";
import React from "react";
import "./mobile.nav.links.scss";
import Link from "next/link";
import { AuthLogout } from "@/lib/actions/auth/logout";

const MobileNavLinks = ({ icon, text, handleMobileSidebarToggle, link }) => {
	if (link) {
		return (
			<Link href={link}>
				<button
					className="mobile-general-links"
					onClick={handleMobileSidebarToggle}
				>
					<div className="mobile-side-bar-icon"> {icon}</div>

					<h5 className="mobile-h5text">{text}</h5>
				</button>
			</Link>
		);
	} else {
		return (
			<form action={AuthLogout}>
				<button
					className="mobile-general-links"
					onClick={handleMobileSidebarToggle}
				>
					<div className="mobile-side-bar-icon"> {icon}</div>

					<h5 className="mobile-h5text">{text}</h5>
				</button>
			</form>
		);
	}
};

export default MobileNavLinks;
