import Link from "next/link";
import React from "react";

export default function nav() {
	return (
		<div>
			<Link href="/">Home</Link>
			<Link href="/history">History</Link>
		</div>
	);
}
