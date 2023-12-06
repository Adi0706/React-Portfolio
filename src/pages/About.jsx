import React from 'react';
import NavBar from '../Components/NavBar';
import Animation from '../Components/Animation';
import AboutPic from '../Media/aboutpic.png';
import {motion } from 'framer-motion'
function About() {
  return (
    <>
      <Animation>
        <NavBar />
        <span className='head-text'><h1 style={{
            color: "white",
            fontFamily: "kanit",
            fontSize: "2.5rem", 
            fontWeight: "bold",
            marginTop:"55px",
            marginLeft:"100px"
          }}>ABOUT ME</h1></span>
        <div className="container">
          
          <div className="body-text" style={{ color: "white", fontSize: "20px",textAlign:"justify" }}>
          Hello, I'm Aditya Bhattacharjee, a passionate and self-taught aspiring Software Developer. Throughout my journey, coding, learning new technologies, and building projects have been incredibly fulfilling experiences. Consistency and embracing mistakes as learning opportunities have played a pivotal role in my growth. I remain committed to continuous learning and self-improvement, as these qualities pave the way for becoming an exceptional programmer.
<br/><br/>
Apart from coding, I have a diverse range of hobbies and interests that bring me joy and enrich my life. I find comfort in singing and playing the piano, allowing me to express myself creatively. Additionally, I have a deep passion for bodybuilding and fitness, which keeps me motivated and helps me maintain a healthy lifestyle. Reading books allows me to expand my knowledge and explore different worlds, while traveling enables me to experience diverse cultures and broaden my horizons. I also have a great love for food, delighting in exploring various cuisines and discovering the unique flavors of different places. These hobbies collectively contribute to my personal growth and add richness to my life.
          
          </div>
          <motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 300 }}
>
          <img src={AboutPic} className="main-pic" style={{
            height: "500px",
            width: "500px"
          }} alt='about-pic'></img></motion.div>
        </div>
      </Animation>
    </>
  );
}

export default About;
