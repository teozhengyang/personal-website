import React from 'react';
import { Box, Typography, Grid2, Card, CardMedia, CardContent, Button } from '@mui/material';
import MediumIcon from '@mui/icons-material/LibraryBooks';
import work_in_progress from '../assets/images/blog/work-in-progress.jpg';

const articles = [
  {
    title: 'Working On It',
    description: 'Stay tuned for more blog articles!',
    image: work_in_progress,
    link: 'https://medium.com/@teozhengyang',
  },
];

const Blog = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 10 } }} id="blog">
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ marginBottom: { xs: 2, md: 4 }, fontWeight: 'bold' }}
      >
        My Blog
      </Typography>
      <Grid2 container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {articles.map((article, index) => (
          <Grid2 
            size={{ xs: 5, sm: 4, md: 3 }}
            key={index}
          >
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
                style={{ backgroundColor: "#" }}
              />
              <CardContent style={{ backgroundColor: "#181818" }}>
                <Typography variant="h6" fontWeight="bold" color="white">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="white" sx={{ marginY: 1 }}>
                  {article.description}
                </Typography>
                <Button 
                  variant="contained" 
                  style={{ backgroundColor: "#212121", color: 'white' }} 
                  href={article.link} 
                  target="_blank" 
                  startIcon={<MediumIcon />}
                  fullWidth
                >
                  Read on Medium
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>  
  );
};

export default Blog;
