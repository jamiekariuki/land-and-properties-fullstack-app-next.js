import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
import React from "react";

const TagSix = () => {
	return (
		<div style={{ width: "100%", marginTop: "40px" }}>
			<DoubleSPlit
				image={"https://i.postimg.cc/K4XPW6s9/village-view-from.jpg"}
				content={
					<>
						<h3>Lorem, ipsum dolor consectetur</h3>

						<ol>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
						</ol>

						<p>
							Alias esse corrupti officia fugiat sequi repellendus
							magni ex eaque nesciunt, consectetur distinctio
							laboriosam saepe accusamus libero!
						</p>
					</>
				}
			/>
		</div>
	);
};

export default TagSix;
