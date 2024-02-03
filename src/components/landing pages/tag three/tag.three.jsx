import React from "react";
import "./tag.three.scss";
import Image from "next/image";

const TagThree = () => {
	return (
		<div className="tag-3">
			<div className="tag-3-info">
				<div className="tag-3-container">
					<h1>Lorem ipsum dolor sit </h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quam, id dolor aut nam sint officia! Culpa nisi ratione,
						quisquam, sunt reiciendis ea voluptas ut, aperiam
						voluptatem pariatur itaque ullam esse?
					</p>
					<button>
						<p>See More</p>
					</button>
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
