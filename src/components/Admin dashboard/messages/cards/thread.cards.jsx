import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ThreadCard = ({ item }) => {
	const createdAtDate = dayjs(item.createdAt);

	const formattedCreatedAt = createdAtDate.fromNow();
	return (
		<>
			<div className="card-top">
				<h6>{item.email}</h6>
			</div>
			<div className="time-p">
				<p>{formattedCreatedAt}</p>
			</div>
		</>
	);
};

export default ThreadCard;
