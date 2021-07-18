import styles from "./MainContent.module.css";
import React from "react";
import curve1 from "../../assets/curve-1.png";
import curve2 from "../../assets/curve-2.png";
import polygon from "../../assets/polygon.png";

const MainContent = ({
  id,
  component: Component,
  imgSrc,
  reverse,
  bgPos,
  poly,
}) => {
  return (
    <div
      id={id}
      className={styles.container}
      style={{ flexDirection: `${reverse}` }}
    >
      <div className={styles.textContainer}>
        {poly && <img style={{ marginLeft: "128px" }} src={polygon} alt="" />}{" "}
        <h1 className={styles.number}>{id}</h1>
        <h2 className={styles.title}>Lorem Ipsum is simply dummy text</h2>
        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed.
        </p>
      </div>
      <div
        className={styles.mediaContainer}
        style={{ backgroundPosition: `${bgPos}` }}
      >
        {Component && <Component style={{ width: "100%" }} />}
        {imgSrc && <img className={styles.image} src={imgSrc} alt="" />}{" "}
      </div>
      <div className={styles.curves}>
        <img className={styles.curve} src={curve1} alt="" />
        <img className={styles.curve} src={curve2} alt="" />
      </div>
    </div>
  );
};

export default MainContent;
