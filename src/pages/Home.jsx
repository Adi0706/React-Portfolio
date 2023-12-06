import React from 'react'
import NavBar from '../Components/NavBar'
import MainPic from '../Media/figma-import.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Animation from '../Components/Animation';
import {motion} from 'framer-motion'


function Home() {
  return (
    <>
      <Animation>
        <NavBar/>
        <div className="container">
        <div className="body-text">
          <h1 className='main-text' style={{
            fontFamily:"kanit",
            fontSize:"80px",
            color:"white",
          
          }}>ADITYA BHATTACHARJEE</h1>
          <p style={{
            color:"white",
            fontSize:"20px",
            fontFamily:"initial"
            
          }}>I am a Software Developer , specialised in building user interfaces for Webpages.</p><br/>
         <a href='https://github.com/Adi0706'><FaGithub style={{width:"30px",height:"30px",color:"white",marginLeft:"100px",cursor:"pointer"}}/></a>
         <a href='https://www.linkedin.com/in/aditya-bhattacharjee-288462215/' ><FaLinkedin style={{width:"30px",height:"30px",color:"white",marginLeft:"80px",cursor:"pointer"}}/></a>
         
          

        </div>
        <motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 300 }}
>
        <img src={MainPic} alt ='body-pic' className='main-pic'></img> </motion.div>
        </div>
        </Animation>
    </>
  )
}

export default Home