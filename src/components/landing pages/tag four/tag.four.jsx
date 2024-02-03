import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
import React from "react";

const TagFour = () => {
	return (
		<DoubleSPlit
			image={
				"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
			}
			content={
				<>
					<h3>Lorem, ipsum dolor consectetur</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus quidem hic accusamus dolorem natus
						numquam maiores quis non corrupti, cupiditate, quam
						autem ut, corporis libero optio sapiente itaque porro
						molestias!
					</p>

					<div>
						<button>
							<p>Read More</p>
						</button>
					</div>
				</>
			}
			flexReverse={true}
		/>
	);
};

export default TagFour;
