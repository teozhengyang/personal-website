import React from 'react';
import { Box } from '@mui/material';
import '../assets/AboutMe.css';
import python_logo from '../assets/python.png';
import java_logo from '../assets/java.png';
import js_logo from '../assets/js.png';

const AboutMe = () => {
  return (
    <div id='about-me'>

      <h1>About Me</h1>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Box
          component="img"
          src={python_logo}
          alt="Python Icon"
          sx={{ width: 30, height: 30 }}
        />
        <Box
          component="img"
          src={java_logo}
          alt="Java Icon"
          sx={{ width: 30, height: 30 }}
        />
        <Box
          component="img"
          src={js_logo}
          alt="JavaScript Icon"
          sx={{ width: 30, height: 30 }}
        />
      </Box>

      <p class='about-me-text'> 
        I'm a penultimate-year Computer Science student at NUS, specializing in database systems and software engineering. 
        With a mix of school and self-learning, I've built a solid arsenal—tools like Figma, Docker, and AWS,
        languages like Python, Java, and JavaScript, and frameworks like React, Flask, and Django. 
        I see the big picture while sweating the small stuff, blending creativity with logic to craft software that’s smart, intuitive, and fun to use. 
        Always hungry to level up and add more firepower to my toolkit!
      </p>

      <br />

      <p class='about-me-text'> 
        When I’m not coding, you’ll catch me glued to the screen, watching football, basketball, or the latest F1 race. 
        I love the thrill of a good game, cheering for my favorite teams and athletes. 
        When I'm not immersed in sports, I’m likely planning my next trip or enjoying a fun night out. 
        After all, life’s too exciting to just stay behind the screen!
      </p>

      <p class='about-me-text'>
        Languages: Python, Java, JavaScript, TyoeScript, SQL, HTML, CSS, Solidity
        <br />
        Frameworks: React, Flask, Django
        <br />
        Others: Figma, Docker, AWS, Git, Jira, Selenium, Material UI
      </p>

    </div>
    
  );
};

export default AboutMe;
