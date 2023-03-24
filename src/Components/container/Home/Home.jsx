import { useEffect, useState } from 'react';
import portrait from "../../../Assests/portrait.jpg"
import portrait2 from "../../../Assests/portrait2.jpg"
import './Home.scss'


function Home() {
    return (
        <div className="container" id="home">
            <div className="profile">
                <img src={portrait} alt="portrait-img" />
            </div>

            <div className="profile-text">
                <h3 className="name">
                    Hi, I'm <span>Kevin Yu</span>
                </h3>
                <span className="job">Software Developer</span>
                <span className="text">Passionate <br />
                    about crafting <br />
                    advanced software
                </span>

                <a href="contact">connect with me</a>
            </div>

        </div>
    );
}

export default Home;