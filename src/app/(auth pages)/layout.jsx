import React from "react";
import "./auth.page.scss";
import Back from "@/components/styled components/back/back";
import "@uploadthing/react/styles.css";

const AuthLayout = ({ children }) => {
	return (
		<div className="auth-page">
			<div className="auth-cont">
				<div className="redirect-back">
					<Back home={true} />
				</div>

				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
