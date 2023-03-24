import { useEffect, useState } from 'react';

// Fix Resume download

import { motion } from 'framer-motion';
import { bios } from '../../../Data'
import portrait from "../../../Assests/portrait.jpg"
import portrait2 from "../../../Assests/portrait2.jpg"
import resume from "../../../Assests/KevinYu.pdf"

import './About.scss'



function About(props) {


    return (
        <div className="container" id="about">
            <motion.div className="title"
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
            >

                <span>Who Am I</span>
                <h1>About Me</h1>

            </motion.div>

            <div className="about-box">
                <motion.div className="about-left"
                    initial={{x: 0 }}
                    transition={{ duration: 1 }}
                >

                    <motion.img
                        src={portrait2}
                        whileHover={{ x: -45, y: -38 }}
                        transition={{ duration: 0.3 }}
                    />

                </motion.div>

                <motion.div className="about-right"
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    {bios.map(bio => {
                        return (
                            <div className="bio" key={bio.id}>
                                <span className="bioKey">{bio.icon}{bio.key}</span>
                                <span className="bioValue">{bio.value}</span>
                            </div>
                        )
                    })}

                    <motion.a href={resume} download
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Download Resume
                    </motion.a>
                </motion.div>

            </div>
        </div>
    );
}

export default About;