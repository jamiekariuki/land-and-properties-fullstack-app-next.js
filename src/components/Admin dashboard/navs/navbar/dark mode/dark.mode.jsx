"use client";
import React, { useContext } from "react";
import "./dark.mode.scss";
import { ThemeContext } from "@/context/themeContext";
import { BsFillMoonFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

export const DarkMode = () => {
	const { toggle, darkMode } = useContext(ThemeContext);

	return (
		<div className="mode" onClick={toggle.toggleColorMode}>
			<div className="dark">
				<BsFillMoonFill className="dark-icon" />
			</div>

			<div className="light">
				<MdWbSunny className="light-icon" />
			</div>
		</div>
	);
};
