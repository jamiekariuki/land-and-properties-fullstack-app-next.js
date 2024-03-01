"use client";
/* import React, { useEffect, useState } from "react";
import "./property.scss";
import { PropertiesData } from "../properties/property";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import dynamic from "next/dynamic";
import PropertiesCard2 from "../properties/properties2 card/properties2";
import { BsPinFill } from "react-icons/bs";
import { MdApartment } from "react-icons/md";
import { MdAnnouncement } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
//const MapC = dynamic(() => import("./map"), { ssr: false });

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/context/toastContext";
import { addMessage } from "@/lib/actions/message";
import { MessageSchema } from "@/utils/validators/message.schema"; */

const Property = ({ item }) => {
	/* const [pic, setPic] = useState(0);

	const AmenitiesArray = item.amenities.split(",").map((word) => word.trim());

	//----------------------
	const { showToast } = useToast();

	const [error, setError] = useState("");
	const [submiting, setSubmiting] = useState(false);
	const [success, setSuccess] = useState("");

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(MessageSchema),
	});

	useEffect(() => {
		if (success !== "") {
			showToast(success, "success");
		} else if (error !== "") {
			showToast(error, "error");
		}
		setError("");
		setSuccess("");
	}, [success, error]);

	const onSubmit = (data) => {
		setSubmiting(true);
		//server action
		data.Property.propertyId = item._id;
		data.Property.title = item.title;
		data.Property.description = item.description;
		data.Property.picture = item.picture;

		addMessage(data).then((data) => {
			setError(data?.error);
			setSuccess(data?.success);
			setSubmiting(false);
		});
	}; */

	return (
		<div className="property">
			<h1>{item.title}</h1>
		</div>
	);
};

export default Property;
