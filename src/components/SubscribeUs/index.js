import styles from "./SubscribeUs.module.css";
import React from "react";
import rightImg from "../../assets/right-bg.png";
import leftImg from "../../assets/left-bg.png";

const SubscribeUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.arrow} />

      <img className={styles.leftBg} src={leftImg} alt="" />
      <img className={styles.rightBg} src={rightImg} alt="" />

      <div className={styles.content}>
        <h1 className={styles.title}>Subscribe For Latest Updates</h1>
        <div className={styles.inputContainer}>
          <input placeholder="Email Address" className={styles.input} />
          <input placeholder="Designation" className={styles.input} />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
