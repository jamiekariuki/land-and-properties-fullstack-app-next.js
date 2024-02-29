"use client";
import React, { useEffect, useState } from "react";
import "./footer.scss";
import {
	BsFacebook,
	BsInstagram,
	BsTelephone,
	BsTwitter,
} from "react-icons/bs";
import Link from "next/link";
import { links } from "../landing navbar/nav.links";
import { BsEnvelope } from "react-icons/bs";
import { BsPinMapFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/context/toastContext";
import { SubscriberSchema } from "@/utils/validators/subscriber.schema";
import { addSubscriber } from "@/lib/actions/subscribers";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		updateYear();
		return () => {
			document.removeEventListener("scroll", updateYear);
		};
	}, []);

	const updateYear = () => {
		const newYear = new Date().getFullYear();
		setCurrentYear(newYear);
	};

	//----
	const { showToast } = useToast();

	const [error, setError] = useState("");
	const [submiting, setSubmiting] = useState(false);
	const [success, setSuccess] = useState("");

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(SubscriberSchema),
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
		addSubscriber(data).then((data) => {
			setError(data?.error);
			setSuccess(data?.success);
			setSubmiting(false);
		});
	};

	/* if (errors.email.message) {
		showToast(errors.email.message, "error");
	} */

	//------
	const pathname = usePathname();
	const pathParts = pathname.split("/");
	const firstPathname = pathParts[1];

	if (
		!(
			firstPathname === "dashboard" ||
			firstPathname === "login" ||
			firstPathname === "sign-up"
		)
	) {
		return (
			<div className="footer">
				<div className="footer-container">
					<div className="footer-cont footer-left">
						<form
							className="fl-cont"
							onSubmit={handleSubmit(onSubmit)}
						>
							<p>Subscribe to our news letter</p>

							<input
								id={"sub-email"}
								placeholder="Enter your email "
								type={"email"}
								className="input-field"
								{...register("email")}
							/>

							<button disabled={submiting}>
								{submiting ? (
									<p>Submiting...</p>
								) : (
									<p>Submit</p>
								)}
							</button>

							<div className="fl-company">
								<h6>
									Perculiarmarc <span>Ventures</span>
								</h6>
								<p>
									You're welcome to drop by our offices
									located at EPZ Plaza, 2nd Floor, on EPZ Road
									in Kitengela Town, Kajiado County. Should
									you prefer to reach us by mail, our postal
									address is P.O. Box 1074-00241. We're here
									to assist you.
								</p>
							</div>
						</form>
					</div>
					<div className="footer-cont footer-middle">
						<div className="fm-cont">
							<ul>
								<ul>
									{links.map((link, index) => (
										<li key={index}>
											<Link href={link.href}>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</ul>
						</div>
					</div>
					<div className="footer-cont footer-right">
						<div className="fr-cont">
							<Link
								href={
									"https://www.instagram.com/peculiarmarcventures/"
								}
							>
								<div className="social-links">
									<BsInstagram className="footer-icon" />
									<p>peculiarmarcventures</p>
								</div>
							</Link>
							<Link
								href={
									"https://twitter.com/peculiarmarc?ref_src=twsrc%5Etfw&s=09"
								}
							>
								<div className="social-links">
									<BsTwitter className="footer-icon" />
									<p>@Perculiarmarc</p>
								</div>
							</Link>
							<Link
								href={
									"https://www.facebook.com/Peculiarmarc-Ventures-Co-Ltd-325539414738828"
								}
							>
								<div className="social-links">
									<BsFacebook className="footer-icon" />
									<p>Peculiarmarc-Ventures</p>
								</div>
							</Link>
							<div className="social-links">
								<BsTelephone className="footer-icon" />
								<p>+254 701 944 155</p>
							</div>
							<div className="social-links">
								<BsEnvelope className="footer-icon" />
								<p>info@peculiarmarc.co.ke</p>
							</div>

							<Link
								href={
									"https://maps.app.goo.gl/SRPUieQBxL3pgEGz6"
								}
							>
								<div className="social-links">
									<BsPinMapFill className="footer-icon" />
									<p>EPZ PLAZA, 2nd Flr, Kitengela Town</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<p>
						&copy; {currentYear} Perculiarmarc Ventures. All rights
						reserved. {"< / >"} Developed by{" "}
						<Link href={"http://www.nexusfront.com/"}>
							<span> nexusfront</span>
						</Link>
					</p>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Footer;
