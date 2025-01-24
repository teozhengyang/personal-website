import React from 'react';
import { Box, Typography, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import games from '../assets/games.jpg';
import header from '../assets/header.jpg';
import calculator from '../assets/calculator.jpg';
import chatbot from '../assets/chatbot.jpg';
import docker_aws from '../assets/docker_aws.jpg';
import schedule from '../assets/schedule.png';
import eventify from '../assets/eventify.jpg';
import calcifer from '../assets/calcifer.jpg';

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
    title: 'Docker and AWS',
    description: 'A simple Python script to deploy a Docker container on AWS EC2 instance.',
    image: docker_aws,
    github: 'https://github.com/teozhengyang/docker_aws',
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
    github: 'https://github.com/teozhengyang/personal-website',
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
