import React from 'react'
import "./About.css"
import software  from "../../Assets/programing.png"
import web  from "../../Assets/web.png"
import data  from "../../Assets/sql.png"
import { motion } from 'framer-motion'; 
import {fadeIn} from "../varients"
function About() {
  return (
    <section className="about">
        
       <motion.span
                       variants = {fadeIn ("down", 0.1)}
                       initial = "hidden"
                       whileInView = {"show"}
                       viewport = {{
                         once: false,
                         amount: 0}} 
       className="skillTitle">What I do</motion.span>
       <motion.span
                       variants = {fadeIn ("up", 0.2)}
                       initial = "hidden"
                       whileInView = {"show"}
                       viewport = {{
                         once: false,
                         amount: 0}}  className="skillDesc">I am currently a dedicated third-year student at Belgium Campus Itversity, studying a Diploma in Information Technology 
                         with a focus on software development/Web development. My goal is to conquer complex software issues and produce 
                         programs that are not only secure but also extremely efficient. I have a strong work ethic, an eye for innovation, and a 
                         strong desire to learn different programming languages. If given the opportunity, I am eager to use my talents and 
                         expertise to contribute meaningfully to your company's efforts.</motion.span>
       <div className="skillBars">
        <motion.div 
                variants = {fadeIn ("left", 0.2)}
                initial = "hidden"
                whileInView = {"show"}
                viewport = {{
                  once: false,
                  amount: 0}}
        className="skillBar">
            <img src={software} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Software Development</h2>
                <p> I specialize in creating robust software solutions, leveraging my expertise while continuously expanding my knowledge in the field. </p>
            </div>
        </motion.div>

        <motion.div 
                variants = {fadeIn ("right", 0.2)}
                initial = "hidden"
                whileInView = {"show"}
                viewport = {{
                  once: false,
                  amount: 0}}
        className="skillBar">
            <img src={data} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Data design</h2>
                <p>I excel in designing efficient databases, combining my current skills with ongoing learning to optimize data management strategies.</p>
            </div>
        </motion.div>

        <motion.div 
                variants = {fadeIn ("left", 0.2)}
                initial = "hidden"
                whileInView = {"show"}
                viewport = {{
                  once: false,
                  amount: 0}}
        className="skillBar">
            <img src={web} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Development</h2>
                <p>Proficient in developing responsive web applications, I'm dedicated to refining my skills and staying updated with the latest trends in web technologies.</p>
            </div>
        </motion.div>
       </div>
    </section>
  )
}

export default About