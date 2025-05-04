"use client";
import { useState } from "react";
import { User as UserType } from "./types";

function fetchData(id: number, signal?: AbortSignal): Promise<UserType> {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		signal,
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error(`userIdが${id}のユーザーデータを取得できませんでした`);
			}
			return res.json();
		})
		.catch((error) => {
			throw error;
		});
}

export default function User() {
	const [user, setUser] = useState<UserType | null>(null);
	const [error, setError] = useState<string>("");

	const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const controller = new AbortController();
		try {
			const data = await fetchData(Number(e.target.value), controller.signal);
			setUser(data);
			setError("");
			console.log(data);
		} catch (error: unknown) {
			setUser(null);
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("予期せぬエラーが発生しました");
			}
		}
	};

	return (
		<>
			<input type="number" onChange={onChange} />
			<div>{user && <p>{user.name}</p>}</div>
			{error && <div>エラー：{error}</div>}
		</>
	);
}
