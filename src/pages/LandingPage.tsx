import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const LandingPage: React.FC = () => {

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome!
      </Typography>
      <TextField
        label="Enter your interests"
        variant="outlined"
        fullWidth
        margin="normal"
      />
    </Container>
  );
};

export default LandingPage;