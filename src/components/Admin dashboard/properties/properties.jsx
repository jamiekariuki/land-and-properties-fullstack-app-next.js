"use client";
import React from "react";
import "./properties.scss";
import Search from "@/components/styled components/inputs/search";
import Button from "@mui/material/Button";
import { IoMdAdd } from "react-icons/io";
import DashboardPropertyCard from "./property card/property.card";
import { PropertiesData } from "@/components/properties pages/properties/property";
import Link from "next/link";

const AdminProperties = () => {
	return (
		<div className="a-properties">
			<div className="ap-header">
				<Search borderRadius={true} />

				<Link href={"/dashboard/properties/add-property"}>
					<Button
						variant="contained"
						size="small"
						startIcon={<IoMdAdd className="ap-icons" />}
					>
						<h6 className="user-h6">add property</h6>
					</Button>
				</Link>
			</div>

			<div className="property-container">
				<div
					className={
						PropertiesData.length > 2
							? "ap-prop ap-prop2"
							: "ap-prop"
					}
				>
					{PropertiesData.map((item, index) => (
						<div className="property-box" key={index}>
							<DashboardPropertyCard item={item} />
						</div>
					))}

					<div className="property-box-add">
						<Link href={"/dashboard/properties/add-property"}>
							<div className="tb-add">
								<IoMdAdd className="tb-add" />
								<h4>add property</h4>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminProperties;
