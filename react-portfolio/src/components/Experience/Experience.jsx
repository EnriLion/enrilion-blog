import React from "react";

import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return ( <section>
        <h2>Experience</h2>
        <div>
            <div>{
                skills.map((skill, id) => (
                    <div key={id}>
                        <div><img src={getImageUrl(skill.imageSrc)} alt={skills.title}/></div>
                        <p>{skill.title}</p>
                    </div>
                ))
                }
            </div>
            <ul>
                {
                 history.map((historyItem, id)  => (
                    <li key={id}>
                        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organization} Logo`} />
                        <div>
                            <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                            <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiences.map((experience, id) => {
                                return <li key={id}>{experience}</li>;
                            })}
                            </ul>
                        </div>
                    </li>
                 ))
                }
            </ul>
        </div>
    </section>);
};