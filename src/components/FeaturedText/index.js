import React from "react";
import styles from "./FeaturedText.module.css";

const FeaturedText = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>How it Works?</h1>
			<p className={styles.description}>Lorem Ipsum is simply dummy text</p>
		</div>
	);
};

export default FeaturedText;
