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
			<div className="property-container">
				<div className="property-top">
					<div className="pt-left">
						{/* <div className="pt-slider-container">
							<div className="pt-image-container">
								<Image
									src={item.picture[pic]}
									alt="property photo"
									fill={true}
									className="pt-property-image"
								/>
							</div>

							<div className="pt-slider-navs">
								{item.picture.map((data, index) => (
									<div
										key={index}
										className="pt-dot"
										onClick={() => {
											setPic(index);
										}}
									>
										<Image
											src={data}
											alt="property photo"
											fill={true}
											className="dot-image"
										/>
									</div>
								))}
							</div>
						</div> */}
					</div>
					{/* <div className="pt-right">
						<div className="property-info">
							<div>
								<h3>{item.title}</h3>
								<p>{item.location}</p>
							</div>

							<h6 className="h6-desc">{item.description}</h6>

							<div>
								<h3>
									<span>Ksh</span>
									{item.price}
								</h3>
								<h6>{item.priceQuote}</h6>
							</div>

							<div className="p-actions">
								<IoLocationOutline className="save-icon" />
							</div>
						</div>
					</div> */}
				</div>
				<div className="property-bottom">
					{/* <div className="pb-left">
						<form
							className="pb-form-container"
							onSubmit={handleSubmit(onSubmit)}
						>
							<h5>Contact us on this property</h5>

							<div className="contact-form">
								<h6>Full name</h6>
								<Inputs2
									error={errors.name?.message}
									register={register}
									name={"name"}
									type={"text"}
									label={"Name"}
									id={"p-name"}
								/>
							</div>
							<div className="contact-form">
								<h6>Email</h6>
								<Inputs2
									error={errors.email?.message}
									register={register}
									name={"email"}
									type={"email"}
									label={"Email"}
									id={"p-mail"}
								/>
							</div>

							<div className="contact-form">
								<h6>Phone number</h6>
								<Inputs2
									error={errors.number?.message}
									register={register}
									name={"number"}
									type={"text"}
									label={"phone number "}
									id={"contact-phone-number"}
								/>
							</div>

							<div className="contact-form">
								<h6>Message</h6>
								<TextArea2
									error={errors.message?.message}
									register={register}
									name={"message"}
									label={"Enter message ..."}
									id={"contact-message"}
									inputHeight={"70px"}
								/>
							</div>
							<button disabled={submiting}>
								{submiting ? <p>Sending...</p> : <p>Send</p>}
							</button>
						</form>
					</div> */}
					<div className="pb-right">
						{/* 	<MapC coordinates={item.coordinates} /> */}
					</div>
				</div>

				<div className="more-info">
					{/* <h5>More information about this property:</h5>
					<div className="more-info-cont">
						{item.amenities && (
							<>
								<div className="more-info-title">
									<MdApartment className="mit-icon" />
									<h6> Amenities arround</h6>
								</div>
								<div className="mi-wrapper">
									{AmenitiesArray.map((item, index) => (
										<div
											className="mi-container"
											key={index}
										>
											<BsPinFill className="mi-icon" />
											<p>{item}</p>
										</div>
									))}
								</div>
							</>
						)}

						{item.whyThisProperty && (
							<>
								<div className="more-info-title">
									<MdAnnouncement className="mit-icon" />
									<h6> Why this property</h6>
								</div>
								<div className="mi-why-wrapper">
									<p>{item.whyThisProperty}</p>
								</div>
							</>
						)}

						<div className="more-info-title">
							<FaRegCreditCard className="mit-icon" />
							<h6>Terms of payment</h6>
						</div>
						<div className="mi-wrapper">
							<div className="mi-container">
								<IoMdCheckmark className="mi-icon" />
								<h6>Card</h6>
							</div>

							<div className="mi-container">
								<IoMdCheckmark className="mi-icon" />
								<h6>3 months Instalments</h6>
							</div>

							<div className="mi-container">
								<IoMdCheckmark className="mi-icon" />
								<h6>6 months Instalments</h6>
							</div>

							<div className="mi-container">
								<IoMdCheckmark className="mi-icon" />
								<h6>12 months Instalments</h6>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Property;
