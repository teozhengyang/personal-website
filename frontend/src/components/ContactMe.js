import React from 'react';
import { Box, Typography, Grid2, Button } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const ContactMe = () => {

    /* get current day */
    const day = new Date();

    const quotes = [
      'A Sunday well-snoozed is a Sunday well-used.',
      'Monday: because ‘Good Morning’ is an oxymoron.',
      'Tuesday is just Monday’s ugly sister.',
      'Wednesdays are for surviving, not thriving.',
      'Thursday: Because every week needs a hero day.',
      'Alexa, play ‘It’s Friday I’m in Love’.',
      'I’m multi-slacking this Saturday.',
    ]

  return (
    <Box sx={{ padding: { xs: 4, md: 10 }, backgroundColor: '#181818'}} id="contact">
      <Typography variant="h4" align="center" sx={{ marginBottom: { xs: 2, md: 4 }, fontWeight: 'bold' }}>
        Contact Me
      </Typography>
      <Typography variant="h6" align="center" sx={{ marginBottom: { xs: 2, md: 4 } }} fontFamily={'Consolas'}>
        {quotes[day.getDay()]}
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
