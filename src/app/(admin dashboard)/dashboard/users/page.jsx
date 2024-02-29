import UsersOverview from "@/components/Admin dashboard/users/users overview/users.overview";
import UsersTable from "@/components/Admin dashboard/users/users table/users.table";
import { GetAllUsers } from "@/lib/data/users";
import React from "react";

const UsersPage = async () => {
	const { count, users } = await GetAllUsers();

	const usersWithoutPassword = users.map((user) => {
		const { password, ...userWithoutPassword } = user;
		return userWithoutPassword;
	});

	const serializedusers = JSON.stringify(usersWithoutPassword);
	const parsedusers = JSON.parse(serializedusers);

	const userDocs = parsedusers.map((user) => user._doc);

	//console.log(userDocs);

	return (
		<div>
			<UsersOverview count={count} />
			<UsersTable users={userDocs} /> *
		</div>
	);
};

export default UsersPage;
