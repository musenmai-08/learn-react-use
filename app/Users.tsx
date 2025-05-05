import { Suspense } from "react";
import User from "./User";
import { User as UserType } from "./types";

async function fetchAllUsers(): Promise<UserType[]> {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");

	if (!res.ok) {
		throw new Error("ユーザーデータの取得に失敗しました");
	}

	// 遅延処理
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return res.json();
}

export default async function Users() {
	const usersPromise = fetchAllUsers();

	return (
		<>
			<Suspense fallback={<>Loading...</>}>
				<User usersPromise={usersPromise} />
			</Suspense>
		</>
	);
}
