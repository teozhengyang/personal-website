import React from 'react';
import '../assets/css/AboutMe.css';
import mypicture from '../assets/images/introduction/photo_2025-06-29_16-11-31-new-new.JPG';

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
            I’m Zheng Yang, a Computer Science undergraduate at NUS, specializing in database systems and AI. 
            I’m passionate about full-stack development, with a strong focus on crafting clean, functional, and user-friendly front ends.
          </p>

          <br />

          <p class='about-me-text'> 
            Beyond tech, I’m into football, basketball, F1, music festivals, and traveling the world to experience new cultures.
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
