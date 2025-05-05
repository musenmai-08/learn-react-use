import { cache, use } from "react";
import { User as UserType } from "./types";

const fetchData = cache(async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
	if (!res.ok) throw new Error("error");

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return res.json();
});

export default function User() {
	const users: UserType[] = use(fetchData());

	return (
		<div>
			<ul>
				<li>{users[0].name}</li>
				<li>{users[0].email}</li>
			</ul>
		</div>
	);
}
