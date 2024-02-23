"use client";
import * as React from "react";
import "./badge.scss";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineBell } from "react-icons/ai";

export function NotificationBadge() {
	const [count, setCount] = useState(false);
	const [notif, setNotif] = useState(0);

	useEffect(() => {
		setNotif(6);

		if (notif >= 1) {
			setCount(true);
		} else {
			setCount(false);
		}
	}, [notif]);
	const exceeds99 = notif > 99;
	return (
		<div className="badge">
			<AiOutlineBell className="icon" />
			{count && (
				<div className="count">
					<p>{exceeds99 ? "99+" : notif}</p>
				</div>
			)}
		</div>
	);
}
