import React from 'react';
import data from '../../data/index.json';
import './Projects.css';
import { fadeIn } from "../varients";
import { motion } from 'framer-motion'; 
import { FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}      
        className="portfolio--container-box"
      >
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <a href="https://github.com/Karabo913" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-github"
            >
              View In GitHub
            </motion.button>
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="portfolio--section--container"
      >
        {data.portfolio.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio--card-link">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="portfolio--section--card"
            >
              <div className="portfolio--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
                <div className="portfolio--link-container">
                  <FaGithub className="inline-block mr-1" />
                  <span className="portfolio--link-text">View in GitHub</span>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
