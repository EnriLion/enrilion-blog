import React from "react";

import styles from './ProfileHeading.module.css'

import { getImageUrl } from "../../utils";

export const ProfileHeading = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Diego Leon</h1>
            <p className={styles.description}>I'm a Jr Developer with +1 year of 
                experience using Java Spring Boot and 
                more. Contact me if you are interested!
            </p>
            <a href="mailto:diegoleonc45@gmail.com" className={styles.contactBtn}>Communicate with me!</a>
            </div>    
            <img className={styles.profileImg} src={getImageUrl("profile/profile_icon.png")} alt="Portrait of me"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
    ); 
};