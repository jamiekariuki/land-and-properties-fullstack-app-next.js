"use client";
import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const PropertiesCard = ({ item }) => {
	return (
		<div className="p-cont">
			<div className="p-left">
				<Link href={`/properties/${item._id}`}>
					<div className="p-image-cont">
						<Image
							alt="property-image"
							src={item.picture[0]}
							fill={true}
							className="property-image"
							quality={100}
						/>
					</div>
				</Link>
			</div>
			<div className="p-middle">
				<div className="p-info">
					<Link href={`/properties/${item._id}`}>
						<h3>{item.title}</h3>
					</Link>
					<p>{item.location}</p>
					<h6>
						{item.description.split(" ").slice(0, 20).join(" ")}
						{item.description.split(" ").length > 20 && " ..."}
						<Link href={`/properties/${item?._id}`}>
							<span>Read more</span>
						</Link>
					</h6>

					<div className="p-actions">
						{/* {item.saved ? (
							<AiFillHeart className="save-icon save-filled" />
						) : (
							<AiOutlineHeart className="save-icon " />
						)} */}
						<Link href={item.location}>
							<IoLocationOutline className="save-icon" />
						</Link>
					</div>
				</div>
			</div>
			<div className="p-right">
				<div className="p-price">
					<p>Price</p>
					<h3>
						{" "}
						<span>ksh</span> {item.price}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default PropertiesCard;
