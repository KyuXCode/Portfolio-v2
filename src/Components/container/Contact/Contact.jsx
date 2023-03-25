import { useEffect, useState } from 'react';
import './Contact.scss'
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';


function Contact() {

    const [data, setData] = useState(null);

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="container" id="contact">
            <motion.div className="title"
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
            >
                <span>get in touch</span>
                <h1>Contact Me</h1>
            </motion.div>

            <form className="contact-form" onSubmit={handleSubmit}
                action="https://formsubmit.co/kai38547@email.com" 
                method="POST">

                <motion.div className='contact-left-box'
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    <h3>Just Say Hi</h3>
                    <p className='contact-text'>Fill out the form and I'll get back to you soon!</p>

                    {contacts.map(contact => {
                        return (
                            <div className='contact-left' key={contact.id}>
                                <div className="icon">
                                    {contact.icon}
                                </div>
                                <p>{contact.infoText}</p>
                            </div>
                        )
                    })}

                    <div className="social-icons">
                        {socialIcons.map((socialIcon, index) => {
                            return (
                                <div key={index}>
                                    <a target='_blank' href={socialIcon.link}>{socialIcon.icon}</a>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                <motion.div className="contact-right"
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h3>Get In Touch</h3>

                    <div className="row">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last name' />
                    </div>

                    <div className="row">
                        <input type="text" placeholder='Phone' />
                        <input type="email" placeholder='Email' />
                    </div>

                    <div className="row">
                        <textarea placeholder='Message'></textarea>
                    </div>

                    <motion.div className="btn"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button type='submit'>Send</button>
                    </motion.div>

                </motion.div>
            </form>
        </div >
    )
}


export default Contact;