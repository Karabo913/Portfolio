import React, { useState } from 'react';
import './Resume.css'; 
import data from '../../data/index.json'; 
import * as FaIcons from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from "../varients";
import { Tabs, Tab, Select, MenuItem, useMediaQuery } from '@mui/material'; 

const getIconComponent = (iconName) => {
  return FaIcons[iconName] || null;
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const isMobile = useMediaQuery('(max-width:720px)'); 

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <motion.section
            id="Resume"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <div className="section-wrapper">
              <img src={data.experience.icon} alt="Experience Icon" className="section-icon" />
              <h3 className="section-title">{data.experience.title}</h3>
              <p className="section-description">{data.experience.description}</p>
              <ul className="list">
                {data.experience.items.map((item, index) => (
                  <li key={index} className="list-item">
                    <span className="item-duration">{item.duration}</span>
                    <h4 className="item-position">{item.position}</h4>
                    <p className="item-company">{item.company}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        );
      case 'education':
        return (
          <motion.section
            id="Resume"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <div className="section-wrapper">
              <img src={data.education.icon} alt="Education Icon" className="section-icon" />
              <h3 className="section-title">{data.education.title}</h3>
              <p className="section-description">{data.education.description}</p>
              <ul className="list">
                {data.education.items.map((item, index) => (
                  <li key={index} className="list-item">
                    <span className="item-duration">{item.duration}</span>
                    <h4 className="item-degree">{item.degree}</h4>
                    <p className="item-institution">{item.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        );
      case 'skills':
        return (
          <motion.section
            id="Resume"
            className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="section-wrapper">
              <img src={data.skills.icon} alt="Skills Icon" className="section-icon" />
              <h3 className="section-title">{data.skills.title}</h3>
              <p className="section-description">{data.skills.description}</p>
              <div className="skills-grid">
                {data.skills.skillList.map((skill, index) => {
                  const IconComponent = getIconComponent(skill.icon);
                  return (
                    <div key={index} className="skill-item">
                      {IconComponent && <IconComponent className="skill-icon" />}
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        );
      case 'about':
        return (
          <motion.section
            id="Resume"
            className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="section-wrapper">
              <img src={data.aboutMe.icon} alt="About Icon" className="section-icon" />
              <h3 className="section-title">{data.aboutMe.title}</h3>
              <p className="section-description about-me-description">{data.aboutMe.description}</p>
              <ul className="info-list">
                {data.aboutMe.info.map((item, index) => (
                  <li key={index} className="info-item">
                    <span className="info-field">{item.fieldName}</span>
                    <span className="info-value">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h2 className="main-title">Why should you hire me?</h2>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="tabs"
      >
        {isMobile ? (
          <Select
            value={activeTab}
            onChange={(event) => handleChange(event, event.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: '#27272c',
              color: 'white',
              '& .MuiSelect-icon': {
                color: 'white',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#27272c',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3b82f6',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3b82f6',
              },
            }}
          >
            <MenuItem value="experience">Experience</MenuItem>
            <MenuItem value="education">Education</MenuItem>
            <MenuItem value="skills">Skills</MenuItem>
            <MenuItem value="about">About me</MenuItem>
          </Select>
        ) : (
          <Tabs
            value={activeTab}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            sx={{
              '& .MuiTab-root': {
                color: '#ffffff',
                '&.Mui-selected': {
                  color: '#ffffff',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#ffffff',
              },
            }}
          >
            <Tab value="experience" label="Experience" />
            <Tab value="education" label="Education" />
            <Tab value="skills" label="Skills" />
            <Tab value="about" label="About me" />
          </Tabs>
        )}
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="content"
      >
        {renderContent()}
      </motion.div>
    </div>
  );
};

export default Resume;
