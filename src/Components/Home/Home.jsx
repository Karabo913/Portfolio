import React from 'react';
import './Home.css';
import hire from "../../Assets/hire.png";
import me from "../../Assets/me.png";
import { motion } from 'framer-motion'; 
import { fadeIn } from "../varients";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
    return (
        <section id="intro">
            <div className="contentWrapper">
                <div className="introContent">
                    <motion.span
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0 }}
                        className="hello"
                    >
                        Hello
                    </motion.span><br />
                    
                    <span className="introText">
                        I'm <span className="introName">Neo</span><br />
                        <span>
                            <Typewriter
                                words={['Web Developer', 'Software Developer', 'UI/UX Designer']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </span>
                    
                    <motion.p
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0 }}
                        className="IntroPara"
                    >
                        I am a skilled web designer with experience in creating <br /> 
                        visually appealing and user-friendly websites
                    </motion.p>
                    
                    <a href="/My CV.pdf" target="/My CV.pdf" download>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="btn"
                        >
                            <img src={hire} alt="Hire me" className='btnImg' />Download CV
                        </motion.button>
                    </a>
                </div>
                
                <motion.div 
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    className="bgWrapper"
                >
                    <img src={me} alt="Background" className="bg" />
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
