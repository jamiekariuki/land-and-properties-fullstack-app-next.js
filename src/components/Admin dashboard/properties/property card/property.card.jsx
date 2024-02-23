import Image from "next/image";
import React from "react";
import "./property.card.scss";
import { BsTrashFill } from "react-icons/bs";
import Link from "next/link";

const DashboardPropertyCard = ({ item }) => {
	return (
		<div className="dp-card">
			<Link href={`/dashboard/properties/${item.id}`}>
				<div className="db-card-container">
					<Image
						alt="property image"
						src={item.picture[0]}
						fill={true}
						className="db-card-image"
						quality={100}
					/>
				</div>
			</Link>

			<div className="dp-title">
				<Link href={`/dashboard/properties/${item.id}`}>
					<h6>{item.title}</h6>
				</Link>
				<BsTrashFill className="delete-trashs" />
			</div>
		</div>
	);
};

export default DashboardPropertyCard;
