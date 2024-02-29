import PageHeader from "@/components/styled components/containers/page header/page.header";
import { SelectOptionPlain } from "@/components/styled components/inputs/select.option";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MessageHeader = () => {
	const [message, setmessage] = useState("");
	const messages = ["All", "From contacted", "From properties"];

	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const handlemessage = (e) => {
		setmessage(e);
		const params = new URLSearchParams(searchParams);
		if (e) {
			params.set("message", e);
		} else {
			params.delete("message");
		}
		replace(`${pathname}?${params}`);
	};
	return (
		<PageHeader>
			<div style={{ maxWidth: "250px" }}>
				<SelectOptionPlain
					label={"All"}
					list={messages}
					value={message}
					onValueChange={handlemessage}
					borderRadius={true}
				/>
			</div>
		</PageHeader>
	);
};

export default MessageHeader;
