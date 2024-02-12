import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
import React from "react";

const TagSix = () => {
	return (
		<div style={{ width: "100%", marginTop: "40px" }}>
			<DoubleSPlit
				image={"https://i.postimg.cc/K4XPW6s9/village-view-from.jpg"}
				content={
					<>
						<h3>Our Core Values</h3>

						<ol>
							<li>Integrity</li>
							<li>Customer Service Excellence</li>
							<li>Professionalism</li>
							<li>Entrepreneurship</li>
							<li>Teamwork</li>
							<li>Social Responsibility</li>
						</ol>

						<p>
							We uphold these principles in every interaction.
							With a focus on social responsibility and
							excellence, we aim to positively impact our clients,
							employees, and community.
						</p>
					</>
				}
			/>
		</div>
	);
};

export default TagSix;
