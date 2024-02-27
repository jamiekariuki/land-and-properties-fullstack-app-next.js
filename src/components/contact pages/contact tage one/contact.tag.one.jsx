"use client";
import React, { useEffect, useState } from "react";
import "./contact.tag.one.scss";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import SplitLayout from "@/components/styled components/containers/split layout/split.layout";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/context/toastContext";
import { addMessage } from "@/lib/actions/message";
import { MessageSchema } from "@/utils/validators/message.schema";

const ContactTagOne = () => {
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
		addMessage(data).then((data) => {
			setError(data?.error);
			setSuccess(data?.success);
			setSubmiting(false);
		});
	};

	return (
		<div className="contact-tag-one">
			<div className="contact-1">
				<h3>Get in Touch</h3>
				<p>
					Have questions or ready to start your real estate journey?
					Reach out to us today. We're here to assist you every step
					of the way.
				</p>
			</div>
			<SplitLayout /* height={"350px"} */>
				<div className="split-left">
					<div className="contact-left">
						<h3>Connect with us</h3>
						<p>
							Ready to take the next step? Reach out to us today
							and let's begin your real estate journey together.
						</p>
						<div className="contact-icons">
							<Link
								href={
									"https://www.instagram.com/peculiarmarcventures/"
								}
							>
								<BsInstagram className="contact-icon" />
							</Link>

							<Link
								href={
									"https://twitter.com/peculiarmarc?ref_src=twsrc%5Etfw&s=09"
								}
							>
								<BsTwitter className="contact-icon" />
							</Link>

							<Link
								href={
									"https://www.facebook.com/Peculiarmarc-Ventures-Co-Ltd-325539414738828"
								}
							>
								<BsFacebook className="contact-icon" />
							</Link>

							<BsWhatsapp className="contact-icon" />
						</div>
						<button>
							<p>Sign up</p>
						</button>
					</div>
				</div>
				<div className="split-right">
					<form
						className="contact-right"
						onSubmit={handleSubmit(onSubmit)}
					>
						<h3>Send us a message</h3>

						<div className="contact-form">
							<h6>Full name</h6>
							<Inputs2
								error={errors.name?.message}
								register={register}
								name={"name"}
								type={"text"}
								label={"Name"}
								id={"c-name"}
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
								id={"c-mail"}
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
								id={"c-phone-number"}
							/>
						</div>

						<div className="contact-form">
							<h6>Message</h6>
							<TextArea2
								error={errors.message?.message}
								register={register}
								name={"message"}
								label={"Enter message ..."}
								id={"c-message"}
								inputHeight={"70px"}
							/>
						</div>
						<button disabled={submiting}>
							{submiting ? <p>Sending...</p> : <p>Send</p>}
						</button>
					</form>
				</div>
			</SplitLayout>
		</div>
	);
};

export default ContactTagOne;
