import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import "./Contact.css"; 
import { fadeIn } from "../varients";
import face from "../../Assets/facebook.png";
import inst from "../../Assets/instagram.png";
import link from "../../Assets/linkedin.png";

function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupIcon, setPopupIcon] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

   
    if (form.current.checkValidity()) {
      emailjs
        .sendForm('service_93a1css', 'template_2zfqb42', form.current, 'R9F2AtksOJVr5jV9l')
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            e.target.reset();
            setPopupMessage('Email sent successfully!');
            setPopupIcon(<FaCheckCircle className="icon success" />);
            setShowPopup(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setPopupMessage('Failed to send the message. Please try again later.');
            setPopupIcon(<FaTimesCircle className="icon error" />);
            setShowPopup(true);
          }
        );
    } else {
      alert('Please fill out all required fields.');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{
            once: false,
            amount: 0
          }}
          className="contactPageTitle"
        >
          Contact Me
        </motion.h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <motion.form
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{
            once: false,
            amount: 0
          }}
          className="contactForm"
          ref={form}
          onSubmit={sendEmail}
          noValidate 
        >
          <input type="text" className="name" placeholder="Your Name" name="your_name" required />
          <input type="email" className="email" placeholder="Your Email" name="your_email" required />
          <textarea name="message" className="msg" placeholder="Your Message" rows="5" required></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="submitBtn"
          >
            Submit <FaPaperPlane style={{ marginLeft: '8px' }} />
          </motion.button>
          <div className="links">
            <motion.a 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
            href="https://www.facebook.com/Kaybee.ww?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <img src={face} alt="facebook" className="link" />
            </motion.a>
            <motion.a 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
            href="https://www.instagram.com/kaybee.ww?igsh=MWhwaGJlemZqYWtwbw==" target="_blank" rel="noopener noreferrer">
              <img src={inst} alt="instagram" className="link" />
            </motion.a>
            <motion.a 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/neo-amese-209932253/" target="_blank" rel="noopener noreferrer">
              <img src={link} alt="linkedIn" className="link" />
            </motion.a>
          </div>
        </motion.form>
        <div className={`popup ${showPopup ? 'show' : ''}`}>
          {popupIcon}
          <p>{popupMessage}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
