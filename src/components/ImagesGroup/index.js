import styles from "./ImagesGroup.module.css";

import React from "react";
import boy1 from "../../assets/guy-blue-bg.png";
import boy2 from "../../assets/guy-white-bg.png";
import girl from "../../assets/girl.png";

const ImagesGroup = () => {
	return (
		<div className={styles.container}>
				<img src={boy1} className={styles.image1} alt=" " />
				<img className={styles.image2} src={boy2} alt=" " />
				<img className={styles.image3} src={girl} alt=" " />
		</div>
	);
};

export default ImagesGroup;
