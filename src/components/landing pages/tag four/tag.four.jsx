import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
import Link from "next/link";
import React from "react";

const TagFour = () => {
	return (
		<div style={{ width: "100%", marginTop: "40px" }}>
			<DoubleSPlit
				image={
					"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
				}
				content={
					<>
						<h3>Our Strategic Approach</h3>
						<p>
							Explore our distinctive methodology, built on strong
							networks and valued partnerships with government
							ministries, competent lawyers, and leading financial
							providers like KCB Bank and Cooperative Bank of
							Kenya. Through patronage and excellent customer
							treatment, we've fostered a community of satisfied
							clients, driving the growth of Peculiarmarc Ventures
							Limited. Click to delve deeper into how our approach
							sets us apart
						</p>

						<div>
							<Link href={"./about-us"}>
								<button>
									<p>Read More</p>
								</button>
							</Link>
						</div>
					</>
				}
				flexReverse={true}
			/>
		</div>
	);
};

export default TagFour;
