// "use client";
import { Suspense } from "react";
import User from "./User";

// function fetchData(id: number, signal?: AbortSignal): Promise<UserType> {
// 	return (async () => {
// 		const res = await fetch(
// 			`https://jsonplaceholder.typicode.com/users/${id}`,
// 			{ signal }
// 		);
// 		if (!res.ok) {
// 			throw new Error(`userIdが${id}のユーザーデータを取得できませんでした`);
// 		}
// 		const data = await res.json();

// 		// 遅延を追加
// 		await new Promise((resolve) => setTimeout(resolve, 1000));

// 		return data;
// 	})();
// }

export default function Users() {
	// const [user, setUser] = useState<UserType | null>(null);
	// const [error, setError] = useState<string>("");

	// const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const controller = new AbortController();
	// 	try {
	// 		const data = await fetchData(Number(e.target.value), controller.signal);
	// 		setUser(data);
	// 		setError("");
	// 		console.log(data);
	// 	} catch (error: unknown) {
	// 		setUser(null);
	// 		if (error instanceof Error) {
	// 			setError(error.message);
	// 		} else {
	// 			setError("予期せぬエラーが発生しました");
	// 		}
	// 	}
	// };

	return (
		<>
			{/* <div>
				<input type="number" onChange={onChange} defaultValue={1} />
			</div> */}

			<Suspense fallback={<>Loading...</>}>
				<User />
			</Suspense>

			{/* {error && <div>エラー：{error}</div>} */}
		</>
	);
}
