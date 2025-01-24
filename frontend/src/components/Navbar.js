import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import logo from '../assets/128px-TWICE.png';

const Navbar = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#232323' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left' }}>
          {/* Logo on the left */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
            <Button onClick={() => scrollToSection('header')} style={{ textDecoration: 'none' }}>
              <img 
                src={logo}
                alt="Logo" 
                style={{ width: '40px', height: '40px' }} // Adjust size of the logo as needed
              />
            </Button>
          </Box>
          
          {/* Navbar sections */}
          <Button
            onClick={() => scrollToSection('about-me')}
            sx={{
              color: '#A0A0A0',
              '&:hover': {
                color: 'white',
                backgroundColor: '#242424'
              },
              marginRight: 2,
            }}
          >
            About Me
          </Button>
          <Button
            onClick={() => scrollToSection('experience')}
            sx={{
              color: '#A0A0A0',
              '&:hover': {
                color: 'white',
                backgroundColor: '#232323',
              },
              marginRight: 2,
            }}
          >
            Experience
          </Button>
          <Button
            onClick={() => scrollToSection('project')}
            sx={{
              color: '#A0A0A0',
              '&:hover': {
                color: 'white',
                backgroundColor: '#232323'
              },
              marginRight: 2,
            }}
          >
            Projects
          </Button>
          <Button
            onClick={() => scrollToSection('blog')}
            sx={{
              color: '#A0A0A0',
              '&:hover': {
                color: 'white',
                backgroundColor: '#232323'
              },
              marginRight: 2,
            }}
          >
            Blog
          </Button>
        </Toolbar>
      </AppBar>

    </>
  );
};

export default Navbar;