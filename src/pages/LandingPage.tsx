import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { setInterests } from '../features/user/userSlice';
import { RootState } from '../app/store';

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();
  const interests = useSelector((state: RootState) => state.user.interests);

  const handleInterestsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInterests(event.target.value));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome!
      </Typography>
      <TextField
        label="Enter your interests"
        variant="outlined"
        value={interests}
        fullWidth
        margin="normal"
        onChange={handleInterestsChange}
      />
      <Typography variant="body1" margin="normal">Interests: {interests}</Typography>
    </Container>
  );
};

export default LandingPage;