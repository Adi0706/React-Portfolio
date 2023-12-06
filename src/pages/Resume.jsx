import React from 'react'
import myres from '../Media/resume.png';
import NavBar from '../Components/NavBar';
import Animation from '../Components/Animation';
import {motion} from 'framer-motion';

function Resume() {
  return (
  <>
  <Animation>
  <NavBar/>
  <div className="resume-page">
    <h1 style={{textAlign:"center",fontFamily:"kanit",color:"white"}}>MY UPDATED RESUME<br/>
    </h1>
  <p style={{textAlign:"center"}}><a href='https://drive.google.com/file/d/1s4KicLkP78Ezj66ZxdnN6iefjkZfnoWx/view?usp=drive_link' style={{color:"white",textDecoration:"none"}}>LINK TO RESUME</a></p>
  <motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 300 }}
>
   <img src={myres} alt='my-resume' style={{
    width:"430px",
    borderRadius:"20px",
    marginLeft:"450px",
    boxShadow:"0px 0px 10px white"
  
    
   }}></img></motion.div>
  </div>
  </Animation>
  </>
  )
}

export default Resume