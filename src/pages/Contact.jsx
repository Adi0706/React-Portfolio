import NavBar from '../Components/NavBar';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactlogo from '../Media/icons/phone.png';
import { motion } from 'framer-motion';
import Animation from '../Components/Animation';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gn18fwg', 'template_ej9qf25', form.current, '1WZT41IUzPxG1qNfI')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <Animation>
      <NavBar />
      <h1 style={{ marginLeft: '100px', marginTop: '30px', color: 'white', fontFamily: 'kanit' }}>CONTACT ME </h1>
      <div className="contact-section">
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="logo-contact">
          <motion.img
            src={contactlogo}
            alt="contact-logo"
            style={{
              color: 'white',
              marginBottom: '300px',
              marginRight: '200px',
              width: '400px',
              height: '400px',
            }}
            animate={{ y: [-40, 0, -40] }}
            transition={{
              times: [0, 1],
              duration: 5,
              repeat: Infinity,
              type: 'keyframes',
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
      </Animation>
    </>
  );
}

export default Contact;
