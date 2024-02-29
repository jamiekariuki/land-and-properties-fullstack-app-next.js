"use client";
import React, { useState } from "react";
import "./messages.scss";
import MessageHeader from "./header/message.header";
import ThreadCard from "./cards/thread.cards";
import MessageContent from "./message content/message.content";

const MessagesL = ({ messages }) => {
	const [select, setSelect] = useState(null);

	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	/* const messages = [
		{
			email: "john@gmail.come",
			name: "john",
			phone: "+124354655",
			message:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam optio eum deserunt obcaecati nulla odit itaque explicabo? Neque quia vero quisquam exercitationem velit a temporibus fuga dolor quas similique!",
			property: {
				title: "good one",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ",
				picture: [
					"https://i.postimg.cc/RhpkJP24/pexels-pok-rie-574441.jpg",
					"https://i.postimg.cc/K4XPW6s9/village-view-from.jpg",
					"https://i.postimg.cc/K4XPW6s9/village-view-from.jpg",
				],
			},
			createdAt: "2024-02-27T15:00:04.128Z",
		},
		{
			email: "mary@gmail.come",
			message:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam optio eum deserunt obcaecati nulla odit itaque explicabo? Neque quia vero quisquam exercitationem velit a temporibus fuga dolor quas similique!",
			property: {
				title: "good one",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ",
				picture: [
					"https://i.postimg.cc/ZRHR2SvH/aerial-photography-town-during-daytime.jpg",
					"https://i.postimg.cc/G38zdRng/aerial-view-village.jpg",
					"https://i.postimg.cc/8cWmpXh7/pexels-mehmet-turgut-kirkgoz-4832350.jpg",
				],
			},
			createdAt: "2024-02-22T15:00:04.128Z",
		},
	]; */

	return (
		<div className="plugins">
			<MessageHeader />

			<div className="plugin-container">
				<div
					className={
						open ? "plugin-left plugin-left-mobile" : "plugin-left"
					}
				>
					<div className="left-container">
						{messages.map((item, index) => (
							<div
								className="plugins-list"
								key={index}
								onClick={() => {
									setSelect(index);
									setOpen(true);
								}}
							>
								<ThreadCard item={item} />
							</div>
						))}
					</div>
				</div>
				<div
					className={
						!open
							? "plugin-right plugin-right-mobile"
							: "plugin-right"
					}
				>
					{messages.length > 0 ? (
						<MessageContent
							onClose={onClose}
							message={messages[select]}
						/>
					) : (
						<div className="empty">
							<h2>You currently dont have any messages</h2>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default MessagesL;
