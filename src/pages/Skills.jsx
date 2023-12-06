import React from 'react';
import NavBar from '../Components/NavBar';
import Animation from '../Components/Animation';
import { motion } from 'framer-motion';
import Cprog from '../Media/icons/c-prog.png';
import Cpp from '../Media/icons/icons8-c++-48.png';
import Html from '../Media/icons/icons8-html-48.png';
import Css from '../Media/icons/icons8-css-100.png';
import Javascript from '../Media/icons/icons8-javascript-48.png';
import ReactIcon from '../Media/icons/icons8-react-100.png';
import GitIcon from '../Media/icons/icons8-git-48.png';
import GithubIcon from '../Media/icons/icons8-github-50.png';
import PostmanIcon from '../Media/icons/icons8-postman-api-64.png';
import figma from '../Media/icons/figma.png';

const icons = [
  { icon: Cprog },
  { icon: Cpp },
  { icon: Html },
  { icon: Css },
  { icon: Javascript },
  { icon: ReactIcon },
  { icon: GitIcon },
  { icon: GithubIcon },
  { icon: PostmanIcon },
  { icon: figma },
];

function Skills() {
  return (
    <>
      <Animation>
        <NavBar />
        <h1 style={{ color: 'white', fontFamily: 'kanit', marginTop: '20px', textAlign: 'center', fontSize: '50px' }}>
          SKILLS
        </h1>
        <div className="skill-grid">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className="icon-container"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{  borderRadius: '20px', margin: '10px' }}
            >
              <img src={icon.icon} alt={`Skill ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
            </motion.div>
          ))}
        </div>
      </Animation>
    </>
  );
}

export default Skills;
