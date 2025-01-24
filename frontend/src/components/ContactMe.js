import React from 'react';
import { Box, Typography, Grid2, Button } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const ContactMe = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 10 }, backgroundColor: '#181818'}} id="contact">
      <Typography variant="h4" align="center" sx={{ marginBottom: { xs: 2, md: 4 }, fontWeight: 'bold' }}>
        Contact Me
      </Typography>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        <Grid2 item>
          <Button href="mailto:teozhengyang15@gmail.com" target="_blank" color="primary" startIcon={<Email />}></Button>
        </Grid2>
        <Grid2 item>
          <Button href="https://www.linkedin.com/in/teozhengyang/" target="_blank" color="primary"><LinkedIn /></Button>
        </Grid2>
        <Grid2 item>
          <Button href="https://github.com/teozhengyang" target="_blank" color="primary"><GitHub /></Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ContactMe;
