import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const WorkflowCreation: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Workflow Creation
      </Typography>
      <Typography variant="body1">
        Pre-built workflows will be displayed here.
      </Typography>
    </Container>
  );
};

export default WorkflowCreation;