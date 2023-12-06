import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import Project from '../pages/Project' ; 
import Resume from '../pages/Resume';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
  );
}

export default AllRoutes;
