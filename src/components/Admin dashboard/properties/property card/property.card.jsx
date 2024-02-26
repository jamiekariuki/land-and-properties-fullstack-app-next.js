"use client";
import Image from "next/image";
import React from "react";
import "./property.card.scss";
import { BsTrashFill } from "react-icons/bs";
import Link from "next/link";
import { deleteProperty } from "@/lib/actions/properties";

const DashboardPropertyCard = ({ item }) => {
	const deleteP = () => {
		deleteProperty(item._id);
	};

	return (
		<div className="dp-card">
			<div className="dp-card-container">
				<Link href={`/dashboard/properties/${item._id}`}>
					<Image
						alt="property image"
						src={item?.picture[0]}
						fill={true}
						className="dp-card-image"
						quality={100}
					/>
				</Link>
			</div>

			<div className="dp-title">
				<Link href={`/dashboard/properties/${item._id}`}>
					<h6>{item.title}</h6>
				</Link>

				<form action={deleteP}>
					<button>
						<BsTrashFill className="delete-trashs" />
					</button>
				</form>
			</div>
		</div>
	);
};

export default DashboardPropertyCard;
