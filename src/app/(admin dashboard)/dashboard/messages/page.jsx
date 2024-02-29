import MessagesL from "@/components/Admin dashboard/messages/messages";
import { GetAllMessages } from "@/lib/data/message";
import React from "react";

const Messagepage = async ({ searchParams }) => {
	const message = searchParams?.message || "";

	const msg = await GetAllMessages(message);
	const serializedmsg = JSON.stringify(msg);
	const parsedmsg = JSON.parse(serializedmsg);

	return (
		<div>
			<MessagesL messages={parsedmsg} />
		</div>
	);
};

export default Messagepage;
