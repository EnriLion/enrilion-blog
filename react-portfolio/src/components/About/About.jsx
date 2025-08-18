import React from "react";
import { getImageUrl  } from "../../utils";

export const About = () => {
    // return <section>
    //     <h2>About</h2>
    //     <div><img src= " alt=" /></img></div>
    // </section>
    return (
        <section>
            <h2>About</h2>
            <div>
                <img src={getImageUrl("about/profile_image.png")} alt="Me with a laptop" />
            </div>
            <ul>
                    <li>
                    <img src={getImageUrl("about/server_icon.png")} alt="Cursor icon" />
                    <div>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with experience
                            in building RESTful APIs and Microservices
                        </p>
                    </div>
                    </li>
                    <li>
                    <img src={getImageUrl("about/cursor_icon.png")} alt="Cursor icon" />
                    <div>
                        <h3>Frontend Developer</h3>
                        <p> I have experience developing and well 
                            suited applications and sites
                        </p>
                    </div>
                    </li>
                    <li>
                    <img src={getImageUrl("about/ui_icon.png")} alt="Cursor icon" />
                    <div>
                        <h3>UI Designer</h3>
                        <p> I have designed several applications,
                            websites and beautiful design systems
                        </p>
                    </div>
                    </li>
                </ul>
        </section>
    );
};