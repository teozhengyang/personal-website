import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import logo from '../assets/128px-TWICE.png';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#232323' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: isMobile ? 'space-between' : 'flex-start', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
          <Button onClick={() => scrollToSection('header')} style={{ textDecoration: 'none' }}>
            <img 
              src={logo}
              alt="Logo" 
              style={{ width: '40px', height: '40px' }}
            />
          </Button>
        </Box>

        {isMobile ? (
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <Button onClick={() => scrollToSection('about-me')} sx={{ color: '#A0A0A0', '&:hover': { color: 'white', backgroundColor: '#242424' } }}>
              About Me
            </Button>
            <Button onClick={() => scrollToSection('experience')} sx={{ color: '#A0A0A0', '&:hover': { color: 'white', backgroundColor: '#232323' } }}>
              Experience
            </Button>
            <Button onClick={() => scrollToSection('project')} sx={{ color: '#A0A0A0', '&:hover': { color: 'white', backgroundColor: '#232323' } }}>
              Projects
            </Button>
            <Button onClick={() => scrollToSection('blog')} sx={{ color: '#A0A0A0', '&:hover': { color: 'white', backgroundColor: '#232323' } }}>
              Blog
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
