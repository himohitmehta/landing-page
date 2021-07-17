import styles from "./Footer.module.css"

import React from 'react'
import facebookIcon from '../../assets/facebook.png'
import linkedinIcon from "../../assets/linkedin.png"
import instagramIcon from "../../assets/instagram.png"
import twitterIcon from "../../assets/twitter.png"


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                <img className={styles.icon} src={linkedinIcon} alt=""/>
                <img className={styles.icon} src={instagramIcon} alt=""/>
                <img className={styles.icon} src={twitterIcon} alt=""/>
                <img className={styles.icon}  src={facebookIcon} alt=""/>
              </div>
            <div className={styles.copyright}>
                © 2021. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
