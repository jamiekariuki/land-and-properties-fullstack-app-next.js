"use client";
import React, { useEffect, useState } from "react";
import "./footer.scss";
import {
	BsFacebook,
	BsInstagram,
	BsMailbox,
	BsPin,
	BsTelephone,
	BsTwitter,
} from "react-icons/bs";
import Link from "next/link";

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
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-cont footer-left">
					<div className="fl-cont">
						<p>Subscribe to our news letter</p>

						<input
							id={"sub-email"}
							/* disabled={disabled} */
							/* {...register(id, { required })} */
							/*
							 */
							placeholder="Enter your email "
							/* onChange={(e) => {
						setDefaultValue(e.target.value);
					}} */
							type={"email"}
							className="input-field"
							/* style={{
						borderColor: error && "rgba(255, 0, 0, 0.45)",
					}} */
						/>

						<button>
							<p>Submit</p>
						</button>

						<div className="fl-company">
							<h6>
								Perculiarmarc <span>Ventures</span>
							</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Animi et aliquid aliquam,
								perspiciatis dolores odit neque, veniam ullam
								similique atque iure non placeat? Voluptate,
								praesentium soluta minima eveniet provident
								distinctio.
							</p>
						</div>
					</div>
				</div>
				<div className="footer-cont footer-middle">
					<div className="fm-cont">
						<ul>
							<li>Home</li>
							<li>About Us</li>
							<li>Properties</li>
							<li>Gallery</li>
							<li>Contact Us</li>
							<li>Blog</li>
						</ul>
					</div>
				</div>
				<div className="footer-cont footer-right">
					<div className="fr-cont">
						<div className="social-links">
							<BsInstagram className="footer-icon" />
							<p>Perculiarmarc</p>
						</div>
						<div className="social-links">
							<BsTwitter className="footer-icon" />
							<p>Perculiarmarc</p>
						</div>
						<div className="social-links">
							<BsFacebook className="footer-icon" />
							<p>Perculiarmarc</p>
						</div>
						<div className="social-links">
							<BsTelephone className="footer-icon" />
							<p>Perculiarmarc</p>
						</div>
						<div className="social-links">
							<BsMailbox className="footer-icon" />
							<p>Perculiarmarc</p>
						</div>
						<div className="social-links">
							<BsPin className="footer-icon" />
							<p>Perculiarmarc</p>
						</div>
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
};

export default Footer;
