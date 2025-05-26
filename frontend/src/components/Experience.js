import React from 'react';
import { Box, Typography, Grid2, Chip, Stack } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const languages = [
  {key: 0, label: 'HTML & CSS'},
  {key: 1, label: 'JavaScript'},
  {key: 2, label: 'Typescript'},
  {key: 3, label: 'Python'},
  {key: 4, label: 'Java'},
  {key: 5, label: 'SQL'},
]

const frameworks = [
  {key: 0, label: 'React.js'},
  {key: 1, label: 'Django'},
  {key: 2, label: 'FastAPI'},
  {key: 3, label: 'Spring Boot'},
]

const others = [
  {key: 0, label: 'AWS'},
  {key: 1, label: 'Docker'},
  {key: 2, label: 'Git'},
  {key: 3, label: 'Figma'},
  {key: 4, label: 'Selenium'},
]

const WorkExperience = () => (

  <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">Full-Stack Developer Intern</Typography>
        <Typography variant="body2">Synapxe Pte. Ltd</Typography>
        <Typography variant="body2">May 2025 - Dec 2025</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Develop, integrate, and test applications in cloud environments AWS and Azure, utilising advanced capabilities for scalability and AI services
        </Typography>
      </TimelineContent>
    </TimelineItem>
    
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">Software Engineer Intern</Typography>
        <Typography variant="body2">Home Team Science and Technology Agency</Typography>
        <Typography variant="body2">May 2024 - Aug 2024</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Created phishing kit with tools like Selenium, LLMs like Detectron2 and deployed onto AWS using Docker
        </Typography>
      </TimelineContent>
    </TimelineItem>

  </Timeline>
);

const Education = () => (
  <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">Bachelor of Computer Science</Typography>
        <Typography variant="body2">National University of Singapore</Typography>
        <Typography variant="body2">2022 - 2026</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Focusa areas: Database Systems and Software Engineering
          <br/>
          Modules taken: Database Systems Implementation, Big Data Systems, Software Engineering, Computer Security
        </Typography>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">Exchange</Typography>
        <Typography variant="body2">The Chinese University of Hong Kong</Typography>
        <Typography variant="body2">2024</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Modules taken: Artificial Intelligence, Blockchain Technologies, Operating Systems
        </Typography>
      </TimelineContent>
    </TimelineItem>

  </Timeline>
);

const Timelines = () => {
  return (
    <Box sx={{ padding: 6 }} id='experience'>
      <h1 style={{ marginTop: '20px' }}>My Experiences</h1>
      <Grid2 container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 size={6}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>Work</Typography>
          <WorkExperience />
        </Grid2>

        <Grid2 size={6}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>Education</Typography>
          <Education />
        </Grid2>
      </Grid2>

      <div>
        <Stack direction='row' justifyContent='center' spacing={1} marginTop={3}>
            {languages.map((language) => (
                <Chip
                  label={language.label}
                  sx={{ color: 'white', fontSize: '1rem', backgroundColor: '#212121' }}
                  variant='outlined'
                />
            ))}
        </Stack>
        <Stack direction='row' justifyContent='center' spacing={1} marginTop={3}>
            {frameworks.map((framework) => (
                <Chip
                  label={framework.label}
                  sx={{ color: 'white', fontSize: '1rem', backgroundColor: '#212121'}}
                  variant='outlined'
                />
            ))}
        </Stack>
        <Stack direction='row' justifyContent='center' spacing={1} marginTop={3}>
            {others.map((other) => (
                <Chip
                  label={other.label}
                  sx={{ color: 'white', fontSize: '1rem', backgroundColor: '#212121'}}
                  variant='outlined'
                />
            ))}
        </Stack>
      </div>
    </Box>
  );
};

export default Timelines;
