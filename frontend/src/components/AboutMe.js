import React from 'react';
import '../assets/AboutMe.css';

const AboutMe = () => {
  return (
    <div id='about-me'>

      <h1>About Me</h1>

      <p class='about-me-text'> 
        I am a penultimate year Computer Science undergraduate at the National University of Singapore, specialising in database systems and software engineering.
        My exploration of the field has led me to develop a keen interest in full-stack or front-end development.
        I enjoy creating web applications that are both functional and visually appealing.
      </p>

      <br />

      <p class='about-me-text'> 
        In my free time, I enjoy sports like football, basketball and F1. I also like to travel around the world and experience different cultures.
        All these provides me a chance to escape from the digital world and recharge myself. I will be keen to explore photography in the future as well.
      </p>

      <br />

      <p class='about-me-text'>
        Languages: CSS, HTML, Java, JavaScript, Python, Solidity, SQL, TypeScript 
        <br />
        Frameworks: Django, Flask, React.js
        <br />
        Others: Amazon Web Services, Docker, Figma, Git, Selenium
      </p>

    </div>
    
  );
};

export default AboutMe;
