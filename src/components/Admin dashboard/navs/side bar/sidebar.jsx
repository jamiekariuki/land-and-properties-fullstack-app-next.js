"use client";
import React, { useEffect, useState, useContext } from "react";
import "./sidebar.scss";
import { SlMenu } from "react-icons/sl";
import { NavigationLinks } from "./links";
import Navigations from "./navigation/navigations";
import { ThemeContext } from "@/context/themeContext";
import Image from "next/image";

export const AdminSideBar = () => {
	const [sideBar, setSideBar] = useState(false);

	const handleSidebarToggle = () => {
		setSideBar(!sideBar);
	};

	const [logo, setLogo] = useState(
		"https://i.postimg.cc/kX4DsT09/logo-original.png"
	);

	//darkmode
	const { darkMode } = useContext(ThemeContext);

	useEffect(() => {
		if (darkMode) {
			if (!sideBar) {
				setLogo(
					"https://i.postimg.cc/pTCXYjkp/logo-nexus-coloured.png"
				);
			} else {
				setLogo("https://i.postimg.cc/pV9LnmzX/icon-white-black.png");
			}
		} else {
			if (!sideBar) {
				setLogo("https://i.postimg.cc/kX4DsT09/logo-original.png");
			} else {
				setLogo("https://i.postimg.cc/rpqBGPHN/icon-original.png");
			}
		}
	}, [darkMode, sideBar]);

	return (
		<div
			className={
				sideBar
					? "side-bar-container side-bar-collapse"
					: "side-bar-container"
			}
		>
			<div className="side-bar-toggle" onClick={handleSidebarToggle}>
				<SlMenu className="open-icon" />
			</div>

			<div className="logo-container">
				{/* <Image
					className="logo-image"
					src={logo}
					alt="avatar"
					fill={true}
				/> */}
			</div>

			<div className="side-bar-wrapper">
				{NavigationLinks.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
					/>
				))}
			</div>
		</div>
	);
};
