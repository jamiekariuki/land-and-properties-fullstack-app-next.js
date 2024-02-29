import React, { useEffect, useState } from "react";
import "./message.content.scss";
import IconButton from "@mui/material/IconButton";
import MessageProperty from "./message property/message.property";
import { BiArrowBack } from "react-icons/bi";
import { deleteMessage } from "@/lib/actions/message";

const MessageContent = ({ onClose, message }) => {
	const plugin = true;

	const deleteM = () => {
		deleteMessage(message._id);
	};

	return (
		<div className="plugins-form">
			<div className="back-container">
				<IconButton aria-label="go back" size="small" onClick={onClose}>
					<BiArrowBack className="back-icon" />
				</IconButton>
			</div>

			{message && (
				<>
					<div className="message-container">
						<div className="message-info">
							<h6>Email:</h6>
							<p>{message.email}</p>
						</div>
						{message.name && (
							<div className="message-info">
								<h6>Name:</h6>
								<p>{message.name}</p>
							</div>
						)}
						{message.phone && (
							<div className="message-info">
								<h6>Phone:</h6>
								<p>{message.phone}</p>
							</div>
						)}
						<div className="message-info message-1">
							<h3>Message</h3>
							<p>{message.message}</p>
						</div>
					</div>
					{message.property.title && (
						<div className="m-property">
							<h3>This is user contacted on this property</h3>

							<h6>{message.property.title}</h6>

							<MessageProperty item={message.property} />

							<h6>Description of this property</h6>
							<p>{message.property.description}</p>
						</div>
					)}

					<form action={deleteM}>
						<button>
							<p>Delete this message</p>
						</button>
					</form>
				</>
			)}
		</div>
	);
};

export default MessageContent;
