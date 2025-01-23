import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import image from '../assets/header.jpg';

const Section = () => {

  const scrollToNextSection = () => {
    // Scroll to the next section with a smooth scroll
    const nextSection = document.getElementById('about-me');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Box id='header'>
      <Box
        sx={{
          backgroundImage: `url(${image})`, // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white', 
        }}
      >
        <Box sx={{ padding: 4, borderRadius: '8px' }}>
          <Typography variant="h1" sx={{ fontWeight: 'bold', marginBottom: 2.2 }}>
            Zheng Yang
          </Typography>

          <Typography variant="h5" sx={{ marginTop: 1 }}>
            Turning dreams into reality, one line at a time.
          </Typography>
        </Box>
      
      {/* Downward button to scroll to next section */}
      <IconButton
            sx={{
              position: 'absolute',
              bottom: 20,
              color: 'black',  // Icon color
              backgroundColor: 'white',  // Outer circle color
              borderRadius: '50%',  // Make it round
              padding: '8px',  // Increase padding for a larger button
              '&:hover': { backgroundColor: '#f0f0f0' }, // Hover effect
            }}
            onClick={scrollToNextSection}
          >
            <ArrowDownwardIcon />
      </IconButton>
    </Box>

  </Box>
    
  );
};

export default Section;
