import React from "react";
import "./dashboard.scss";
import { AdminSideBar } from "@/components/Admin dashboard/navs/side bar/sidebar";
import { Poppins } from "next/font/google";
import { AdminNavbar } from "@/components/Admin dashboard/navs/navbar/navbar";

const poppins = Poppins({
	weight: ["200", "300", "400", "500", "600"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

const DashboardLayout = ({ children }) => {
	return (
		<div className={`${poppins.variable} `}>
			<div className="apps">
				<AdminSideBar />
				<div className="app-container">
					<AdminNavbar />
					<div className="all-apps">{children}</div>
				</div>
				<div id="portal" />
			</div>
		</div>
	);
};

export default DashboardLayout;
