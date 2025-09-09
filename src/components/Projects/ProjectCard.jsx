import React, {isValidElement, useState} from "react";

import styles from "./ProjectCard.module.css"

import { getImageUrl } from "../../utils";

export const ProjectCard = ({project : {title, imageSrc, description, skills, demo , source} }) => {
    const [isCardVisible, setIsCardVisible] = useState(false);
    
    const handleButton = () => {
        setIsCardVisible(!isCardVisible);
    }
    return (<div className={styles.container}>
                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>{
                        skills.map((skill, id) => {
                         return(<li key={id} className={styles.skill}>{skill}</li>
                        )})
                        }
                    </ul>
                    <div className={styles.links}>
                        <a href={demo} className={styles.link}>Demo</a>
                        <a href={source} className={styles.link}>Source</a>
                    </div>
            </div>
    );
};