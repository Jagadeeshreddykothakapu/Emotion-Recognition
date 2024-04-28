import React from 'react';
import { Typography, Box, TextField, Button, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 600,
  width: '100%',
  backgroundColor: '#fff',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& .MuiInputBase-root': {
    height: 200, // Increase the height of the message box
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginTop: theme.spacing(2),
}));

const TrademarkClassification = () => {
  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h5" align="center" color= "orange" gutterBottom>
          Registering Your Trademark in the United States
        </Typography>
        <Typography align="center" gutterBottom>
            STEP - 3
        </Typography>
        
        <Typography variant="h6" align="center" gutterBottom>
          Trademark Classification
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Start describing the goods and services related to your mark. 'we' compare the description you provide and provides descriptions
          from the USPTO ID Manual for your consideration.
        </Typography>
        <Typography variant="body2" align="center" color="orange" gutterBottom>
          PLEASE PROVIDE A DESCRIPTION OF YOUR GOODS OR SERVICES *
        </Typography>
        <StyledTextField
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          placeholder="Please provide a description of your goods or services *"
        />
        
        <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <StyledLink to="/next-step4">
            <StyledButton variant="contained" color="primary">
              Continue
            </StyledButton>
          </StyledLink>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default TrademarkClassification;