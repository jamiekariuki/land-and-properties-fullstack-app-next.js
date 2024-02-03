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
						<h6>
							Lorem ipsum dolor sit amet consectetur adipisicing
						</h6>
						<h3>Possimus quos molestias totam,</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Beatae ut accusantium nulla cumque doloribus
							dignissimos. Possimus quos molestias totam,
							voluptatibus atque nisi eveniet, at dignissimos
							impedit nobis, maxime corporis. Explicabo.
						</p>
					</div>
				</div>
			</SplitLayout>
		</div>
	);
};

export default TagOne;
