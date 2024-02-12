import React from "react";
import "./contact.tag.one.scss";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import SplitLayout from "@/components/styled components/containers/split layout/split.layout";
import Link from "next/link";

const ContactTagOne = () => {
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
					<div className="contact-right">
						<h3>Send us a message</h3>

						<div className="contact-form">
							<h6>Email</h6>
							<Inputs2
								/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
								type={"email"}
								label={"Email"}
								id={"contantc-mail"}
								value={""}

								/* changeValue={(e) => {
									handleChange("title", e);
								}} */
							/>
						</div>

						<div className="contact-form">
							<h6>Full name</h6>
							<Inputs2
								/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
								type={"text"}
								label={"Name"}
								id={"contact-name"}
								value={""}

								/* changeValue={(e) => {
									handleChange("title", e);
								}} */
							/>
						</div>

						<div className="contact-form">
							<h6>Phone number</h6>
							<Inputs2
								/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
								type={"text"}
								label={"phone number "}
								id={"contact-phone-number"}
								value={""}

								/* changeValue={(e) => {
									handleChange("title", e);
								}} */
							/>
						</div>

						<div className="contact-form">
							<h6>Message</h6>
							<TextArea2
								/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

								label={"Enter message..."}
								id={"contact-message"}
								value={""}
								inputHeight={"70px"}
								/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
							/>
						</div>
						<button>
							<p>Send</p>
						</button>
					</div>
				</div>
			</SplitLayout>
		</div>
	);
};

export default ContactTagOne;
