import React from 'react';
import { Box, Typography, Grid2 } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const WorkExperience = () => (
  <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">Cyber AI Analytics Intern</Typography>
        <Typography variant="body2">Home Team Science and Technology Agency</Typography>
        <Typography variant="body2">May 2024 - Aug 2024</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Created phishing kit with tools like Selenium, LLMs like Llama3 and deployed onto AWS using Docker
        </Typography>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">Teaching Assistant</Typography>
        <Typography variant="body2">NUS Computing</Typography>
        <Typography variant="body2">Jan 2024 - May 2024</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Taught object-oriented and functional programming concepts using Java to first-year students
        </Typography>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">UI/UX Designer</Typography>
        <Typography variant="body2">Google Developer Student Club</Typography>
        <Typography variant="body2">Sep 2023 - Jun 2024</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Assisted in developing Figma prototypes for a Customer Relationship Management (CRM) system
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
        <Typography variant="body2">2022 - Present</Typography>
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

    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">High School</Typography>
        <Typography variant="body2">Nanyang Junior College</Typography>
        <Typography variant="body2">2018 - 2019</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Graduated with a Physics, Chemistry, Mathematics, Economics combination.
        </Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
);

const Timelines = () => {
  return (
    <Box sx={{ padding: 6 }} id='experience'>
      <h1>Experience</h1>
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
    </Box>
  );
};

export default Timelines;
