"use client";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div>
			<p>{error.message}</p>
			<button onClick={reset}>やり直す</button>
		</div>
	);
}
