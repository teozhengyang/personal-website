import React from 'react';
import { Box, Typography, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import games from '../assets/images/projects/games.jpg';
import header from '../assets/images/introduction/header.jpg';
import calculator from '../assets/images/projects/calculator.jpg';
import chatbot from '../assets/images/projects/chatbot.jpg';
import voting from '../assets/images/projects/voting.jpg';
import schedule from '../assets/images/projects/schedule.png';
import eventify from '../assets/images/projects/eventify.jpg';
import calcifer from '../assets/images/projects/calcifer.jpg';

const projects = [
  
  {
    title: 'Calculator',
    description: 'A simple calculator app built with JavaFX for basic arithmetic operations.',
    image: calculator,
    github: 'https://github.com/teozhengyang/calculator',
  },
  {
    title: 'Chatbot',
    description: 'A chatbot built with JavaFX to provide information and answer questions.',
    image: chatbot,
    github: 'https://github.com/teozhengyang/ip',
  },
  {
    title: 'Voting',
    description: 'A simple voting app built on the Ethereum blockchain using Solidity.',
    image: voting,
    github: 'https://github.com/teozhengyang/voting',
  },
  {
    title: 'Event Planning App',
    description: 'A scheduling app built with Django and React.js to help event organisers.',
    image: eventify,
    github: 'https://github.com/teozhengyang/eventify',
  },
  {
    title: 'Games',
    description: 'A compilation of classic games created using JavaScript that can be played at the command line.',
    image: games,
    github: 'https://github.com/teozhengyang/games',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A portfolio website built using React.js to showcase my work and skills.',
    image: header,
    github: 'https://github.com/teozhengyang/personal_website',
  },
  {
    title: 'Scheduling App',
    description: 'An event scheduling app built with JavaFX to help students plan their timetable.',
    image: schedule,
    github: 'https://github.com/teozhengyang/tp',
  },
  {
    title: 'Others',
    description: 'More projects can be found on my GitHub profile. Feel free to check them out!',
    image: calcifer,
    github: 'http://github.com/teozhengyang/'
  }
];

const Projects = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 10 }, backgroundColor: '#181818' }} id="project">
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ marginBottom: { xs: 2, md: 4 }, fontWeight: 'bold' }}
      >
        My Projects
      </Typography>
      <Grid2 container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {projects.map((project, index) => (
          <Grid2 
            size={{ xs: 5, sm: 4, md: 3 }}
            key={index}
          >
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                style={{ backgroundColor: "black" }}
              />
              <CardContent style={{ backgroundColor: "#212121" }}>
                <Typography variant="h6" fontWeight="bold" color="white">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="white" sx={{ marginY: 1 }}>
                  {project.description}
                </Typography>
                <Button 
                  variant="contained" 
                  style={{ backgroundColor: "#181818", color: 'white' }} 
                  href={project.github} 
                  target="_blank" 
                  startIcon={<GitHubIcon />}
                  fullWidth
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>  

  );
};

export default Projects;
