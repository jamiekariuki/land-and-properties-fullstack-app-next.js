import React from "react";
import "./loading.spinner.scss";

const LoadingSpiner = () => {
	return (
		<div className="loading-spiner">
			<div className="dot-spinner">
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
				<div className="dot-spinner__dot"></div>
			</div>
		</div>
	);
};

export default LoadingSpiner;
