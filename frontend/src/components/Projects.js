import React from 'react';
import { Box, Typography, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import games from '../assets/images/projects/games.jpg';
import header from '../assets/images/introduction/header.jpg';
import calculator from '../assets/images/projects/calculator.jpg';
import eventify from '../assets/images/projects/eventify.jpg';
import calcifer from '../assets/images/projects/calcifer.jpg';
import benchmark from '../assets/images/projects/benchmark.jpg';
import work_in_progress from '../assets/images/blog/work-in-progress.jpg';

const projects = [

  {
    title: 'SQLancer Benchmark',
    description: 'A benchmarking tool built using Java for SQLancer, a testing application for DBMS',
    image: benchmark,
    github: 'https://github.com/teozhengyang/sqlancer_benchmark',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A portfolio website built using React.js to share my projects and blogs',
    image: header,
    github: 'https://github.com/teozhengyang/personal_website',
  },
  {
    title: 'Event Planning App',
    description: 'A scheduling app built with Django and React.js to help event organisers',
    image: eventify,
    github: 'https://github.com/teozhengyang/eventify',
  },
  {
    title: 'Calculator',
    description: 'A simple calculator built with Java Swing for basic operations',
    image: calculator,
    github: 'https://github.com/teozhengyang/calculator',
  },
  {
    title: 'Games',
    description: 'Compilation of games created using JavaScript played at command line',
    image: games,
    github: 'https://github.com/teozhengyang/games',
  },
  {
    title: 'SQL Playground',
    description: 'A place to practice SQL queries built using Spring Boot and Vue.js',
    image: work_in_progress,
    github: 'https://github.com/teozhengyang/sql-playground',
  },
  {
    title: 'Finance Tracker',
    description: 'A personal finance tracker built using Django and Angular',
    image: work_in_progress,
    github: 'https://github.com/teozhengyang/finance_tracker',
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
