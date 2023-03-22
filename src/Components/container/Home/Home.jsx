import { useEffect, useState } from 'react';
import portrait from "../../../Assests/portrait.jpg"
import './Home.scss'


function Home(props) {

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
                    to craft innonvated <br />
                    software
                </span>

                <a href="contact">connect with me</a>
            </div>

        </div>
    );
}

export default Home;