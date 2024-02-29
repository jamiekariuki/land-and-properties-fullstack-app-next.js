import React from "react";
import "./faq.scss";
import faqData from "./faq.data";

const Faq = () => {
	return (
		<div className="faq">
			<div className="faq-cont">
				{faqData.map((faq, index) => (
					<div key={index} className="faq-wrapper">
						<h3>{faq.question}</h3>
						<h6>{faq.answer}</h6>
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
