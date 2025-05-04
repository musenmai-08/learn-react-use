"use client";
import { useEffect, useState } from "react";
import { User as UserType } from "./types";

function fetchData(signal?: AbortSignal): Promise<UserType> {
	return fetch(`https://jsonplaceholder.typicode.com/users/1`, { signal }).then(
		(res) => res.json()
	);
}

export default function User() {
	const [user, setUser] = useState<UserType | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		async function fetcher(): Promise<void> {
			try {
				const data = await fetchData(controller.signal);
				setUser(data);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetcher();

		return () => {
			controller.abort();
		};
	}, []);

	return <div>{user && <p>{user.name}</p>}</div>;
}
