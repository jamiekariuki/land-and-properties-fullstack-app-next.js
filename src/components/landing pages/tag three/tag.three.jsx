import React from "react";
import "./tag.three.scss";
import Image from "next/image";
import Link from "next/link";

const TagThree = () => {
	return (
		<div className="tag-3">
			<div className="tag-3-info">
				<div className="tag-3-container">
					<h1>Navigating Your Real Estate Journey </h1>
					<p>
						We're driven by excellence, delivering unmatched service
						and expertise in real estate. Upholding ethics,
						fostering relationships, we aim for utmost satisfaction.
					</p>

					<Link href={"/about-us"}>
						<button>
							<p>See More</p>
						</button>
					</Link>
				</div>
			</div>
			<Image
				alt="product-image"
				src="https://i.postimg.cc/15ZCJ1c2/aerial-overhead-shot-seashore-with-pure-turquoise-water-lodges-during-daytime.jpg"
				fill={true}
				className="paralax-image"
				quality={100}
			/>
		</div>
	);
};

export default TagThree;
