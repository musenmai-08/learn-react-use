"use client";

import { use, useState } from "react";
import { User as UserType } from "./types";

export default function User({
	usersPromise,
}: {
	usersPromise: Promise<UserType[]>;
}) {
	const [userId, setUserId] = useState(1);

	const users: UserType[] = use(usersPromise);
	const user = users.find((target) => target.id === userId);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserId(Number(e.target.value));
	};

	return (
		<div>
			<div>
				<input type="number" onChange={onChange} defaultValue={1} />
			</div>

			{user ? (
				<ul>
					<li>{user.name}</li>
					<li>{user.email}</li>
				</ul>
			) : (
				<>入力されたIDのユーザーは存在しません</>
			)}
		</div>
	);
}
