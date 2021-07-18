import React from "react";
import styles from "./Header.module.css";
const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<a href="/" className={styles.logo}>
					Logo
				</a>
				<div className={styles.grow} />
				<div className={styles.otherLinks}>
					<a href="/" className={styles.link}>
						How it works
					</a>
					<a href="/" className={styles.link}>
						Career
					</a>
					<button className={styles.button}>Subscribe</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
