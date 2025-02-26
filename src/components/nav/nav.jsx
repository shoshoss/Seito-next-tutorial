import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";

export default function Nav() {
	return (
		<div className={styles.Nav}>
			<Link className={styles.NavLink} href="/">
				Home
			</Link>
			<Link className={styles.NavLink} href="/history">
				History
			</Link>
		</div>
	);
}
