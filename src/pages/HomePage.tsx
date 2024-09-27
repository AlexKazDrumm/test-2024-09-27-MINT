import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>Welcome to the Home Page</h1>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
      </Typography>
    </Container>
  );
};

export default HomePage;