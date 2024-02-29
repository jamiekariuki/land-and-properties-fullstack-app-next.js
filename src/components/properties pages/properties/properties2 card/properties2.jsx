"use client";
import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./properties2.scss";
import Link from "next/link";

const PropertiesCard2 = ({ item }) => {
	return (
		<div className="properties-2">
			<Link href={`/properties/${item._id}`}>
				<div className="p2-top">
					<Image
						alt="property image"
						src={item?.picture[0]}
						fill={true}
						className="property2-image"
						quality={100}
					/>
				</div>
			</Link>

			<div className="pt2-info">
				<div className="property2-info">
					<Link href={`/properties/${item?.id}`}>
						<h3 className="h3-title">{item?.title}</h3>
					</Link>
					{item?.location && <p>{item?.location}</p>}
					<h6>
						{item?.description.split(" ").slice(0, 10).join(" ")}
						{item?.description.split(" ").length > 10 && " ..."}
						<Link href={`/properties/${item?.id}`}>
							<span>Read more</span>
						</Link>
					</h6>

					<h3>
						<span>Ksh</span>
						{item?.price}
					</h3>

					<div className="p-actions">
						{/* {item?.saved ? (
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
		</div>
	);
};

export default PropertiesCard2;
