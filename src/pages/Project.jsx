import React from 'react';
import NavBar from '../Components/NavBar';
import Mindmender from '../Media/project-cards/mindmender.png';
import RepsNSets from '../Media/project-cards/repsnsets.png';
import Photoport from '../Media/project-cards/photoport.png';
import NoteTaker from '../Media/project-cards/note-taker.png';
import Animation from '../Components/Animation';

function Project() {
  const ProjectData = [
    {
      id: '1',
      CardName: 'MINDMENDER',
      CardDesc:
        'Online Mental Health Services for Users, Implemented with functionalities like Booking Therapy Sessions, Filtering therapists, Contact form.',
      CardImage: Mindmender,
      Techstack:"ReactJS , CSS , Material UI",
      SourceCode:"https://github.com/Adi0706/MindMender",
      VideoDemo:"https://drive.google.com/file/d/13X5EXEr_deUhYT8_w82h5wsls5UDh6tN/view?usp=drive_link"
    },
    {
      id: '2',
      CardName: 'REPS N SETS ',
      CardDesc:
        'A personal fitness website where users can register and access various training and diet plans based on their fitness goals. Users can also utilize the Google Maps feature to locate gyms in their vicinity. ',
      CardImage: RepsNSets,
      Techstack:"ReactJS , CSS , Material UI , Node Js , Express Js , Mongo DB",
      SourceCode:"https://github.com/Adi0706/Reps-n-Sets",
      VideoDemo:"https://drive.google.com/file/d/1BV3_t8--YlrAfFma05GSfkknB4kyLKqf/view?usp=drive_link"

    },
    {
      id: '3',
      CardName: 'PHOTOGRAPHY PORTFOLIO',
      CardDesc:
        'A photography portfolio where I have shown my enthusiasm for photography and expertise in development .This site showcasesagallery of my captured photographs.',
      CardImage: Photoport,
      Techstack:"ReactJS , CSS , Material UI ",
      SourceCode:"https://github.com/Adi0706/Photography-portfolio-react",
      VideoDemo:"https://drive.google.com/file/d/104t39XuUO-B6ccx9fRGUlYjGdbKryF-a/view?usp=drive_link"
    },
    {
      id: '4',
      CardName: 'NOTE TAKING APP',
      CardDesc:
        'Note Taking app with functionalities of Delete notes , Add new notes and Save Notes',
      CardImage: NoteTaker,
      Techstack:"ReactJS , CSS , Material UI ",
      SourceCode:"https://github.com/Adi0706/note-taker",
      VideoDemo:"https://drive.google.com/file/d/1PB5f5G-6s7doK6-ruETro9sufJCcKWaC/view?usp=sharing"
    },
    
    
  ];

  return (
    <>
    <Animation>
      <NavBar />
      
      <div className="project-gallery">
        
        <div className="gallery-container">
          {ProjectData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.CardImage} alt={`${item.CardName}-img`} className="card-image" />
              <p>{item.CardName}</p><br/>
              
              <p>{item.CardDesc}</p><br/>
              <p>Tech Stack : {item.Techstack}</p>
              <div className="card-buttons">
              <a href={item.VideoDemo}> <button className="card-button">VIDEO DEMO</button><br/></a>
               <a href={item.SourceCode}> <button className="card-button">SOURCE CODE</button><br/></a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      </Animation>
    </>
  );
}

export default Project;
