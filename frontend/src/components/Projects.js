import React from 'react';
import { Box, Typography, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import tictactoe from '../assets/tictactoe.png';
import connect4 from '../assets/connect4.png';
import header from '../assets/header.jpg';
import calculator from '../assets/calculator.jpg';
import chatbot from '../assets/chatbot.jpg';
import docker from '../assets/docker.png';
import timetabros from '../assets/timetabros.png';
import eventify from '../assets/eventify.jpg';

const projects = [
  {
    title: 'Tic Tac Toe Game',
    description: 'A classic game of Tic Tac Toe built with JavaScript for a fun and interactive experience.',
    image: tictactoe,
    github: 'https://github.com/teozhengyang/tic_tac_toe',
  },
  {
    title: 'Connect Four Game',
    description: 'A classic game of Connect Four built with JavaScript for a fun and interactive experience.',
    image: connect4,
    github: 'https://github.com/teozhengyang/connect4',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A portfolio website built using React.js to showcase my work and skills.',
    image: header,
    github: 'https://github.com/teozhengyang/personal-website',
  },
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
    image: docker,
    github: 'https://github.com/teozhengyang/docker_aws',
  },
  {
    title: 'Scheduling App',
    description: 'A event scheduling app built with JavaFX to help students plan their timetable.',
    image: timetabros,
    github: 'https://github.com/teozhengyang/tp',
  },
  {
    title: 'Event Planning App',
    description: 'A scheduling app built with Django and React.js to help event organisers.',
    image: eventify,
    github: 'https://github.com/teozhengyang/eventify',
  },
];

const Projects = () => {
  return (
    <Box sx={{ padding: 10, backgroundColor: '#181818' }} id="project">
      <Typography variant="h4" align="center" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
        My Projects
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid2 item size={3} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                style={{ backgroundColor: "black"}}
              />
              <CardContent style={{ backgroundColor: "#212121"}}>
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
