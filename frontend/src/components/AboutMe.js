import React from 'react';
import '../assets/css/AboutMe.css';
import mypicture from '../assets/images/introduction/mypicture.jpg';

const AboutMe = () => {

  return (
    <div id='about-me'>

      <h1 id='about-me-header'>About Me</h1>

      <div id="about-me-container">
        <div>
          <p class='about-me-text'> 
            Good morning and in case I don't see you, good afternoon, good evening and good night!
          </p>

          <br />

          <p class='about-me-text'>
            I am Zheng Yang, a Computer Science undergraduate at the National University of Singapore, specialising in database systems and software engineering.
            I have developed a keen interest in full-stack, particularly front-end development, to create functional and visually appealing applications.
          </p>

          <br />

          <p class='about-me-text'> 
            In my free time, I enjoy sports like football, basketball and F1. I also like to travel around the world and experience different cultures.
          </p>

        </div>

        <div>
          <img src={mypicture} alt="Teo Zheng Yang" id="about-me-image" />
        </div>
      </div>

    </div>
    
  );
};

export default AboutMe;
