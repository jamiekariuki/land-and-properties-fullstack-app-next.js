import React from "react";
import "./dashboard.scss";
import { AdminSideBar } from "@/components/Admin dashboard/navs/side bar/sidebar";
import { Poppins } from "next/font/google";
import { AdminNavbar } from "@/components/Admin dashboard/navs/navbar/navbar";
import { currentServerUser } from "@/utils/get current user/get.current.server.user";

const poppins = Poppins({
	weight: ["200", "300", "400", "500", "600"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

const DashboardLayout = async ({ children }) => {
	const user = await currentServerUser();
	return (
		<div className={`${poppins.variable} `}>
			<div className="apps">
				<AdminSideBar />
				<div className="app-container">
					<AdminNavbar user={user} />
					<div className="all-apps">{children}</div>
				</div>
				<div id="portal" />
			</div>
		</div>
	);
};

export default DashboardLayout;
