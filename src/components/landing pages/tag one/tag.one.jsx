import React from "react";
import "./tag.one.scss";
import SplitLayout from "@/components/styled components/containers/split layout/split.layout";
import Image from "next/image";

const TagOne = () => {
	return (
		<div className="tag-one">
			<SplitLayout height={"350px"}>
				<div className="split-left">
					<div className="land-image">
						<Image
							alt="product-image"
							src="https://i.postimg.cc/L805tQq4/aerial-panoramic-landscape-view-road-from-village.jpg"
							fill={true}
							className="l-image"
							quality={100}
						/>
					</div>
				</div>
				<div className="split-right">
					<div className="right-l">
						<h6>Discover Endless Possibilities.</h6>
						<h3>Land Opportunities Await</h3>
						<p>
							Explore endless possibilities with Peculiarmarc
							Ventures Limited in Kenya. Our passion for land
							knows no bounds. From affordable plots to
							trustworthy deals, we specialize in unlocking cheap
							and affordable land opportunities. Discover your
							next investment with us today.
						</p>
					</div>
				</div>
			</SplitLayout>
		</div>
	);
};

export default TagOne;
