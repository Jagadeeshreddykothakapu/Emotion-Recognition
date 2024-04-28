import React from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      secondary: '#888888', // Define the secondary color for text
    },
  },
});

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(4),
  maxWidth: '800px', // Set a maximum width for the container
  marginLeft: 'auto', // Centering it horizontally
  marginRight: 'auto',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const QuestionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

const QuestionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const HelperText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
}));

const ContinueLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
}));

const ContinueButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff5a5f',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#e64a4e',
  },
  marginTop: theme.spacing(2),
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(4),
  fontSize: '0.875rem',
}));

const TrademarkApplicationProcess = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Heading variant="h4">Trademark Application Process - Step 1</Heading>
      <Typography variant="body1">Would you rather have the assistance of a lawyer - starting at $399?</Typography>

      <QuestionPaper>
        <QuestionTitle variant="subtitle1">Select what you are trying to protect</QuestionTitle>
        <RadioGroup row>
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel value="slogan" control={<Radio />} label="Slogan" />
          <FormControlLabel value="logo" control={<Radio />} label="Logo" />
        </RadioGroup>
        <TextField label="Enter the name you wish to protect" fullWidth margin="normal" />
        <HelperText>Does your mark include a living person's name—even if a stage name or pseudonym or could it be perceived to include a person's name?</HelperText>
        <RadioGroup row>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </QuestionPaper>

      <QuestionPaper>
        <HelperText>Does your mark include any words other than English or non-Latin characters?</HelperText>
        <RadioGroup row>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </QuestionPaper>

      <QuestionPaper>
        <HelperText>Are you currently using this trademark in your business?</HelperText>
        <RadioGroup row>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <HelperText>If you do not have proof now, you can submit proof later after your trademark is submitted to the Trademark office. If you do it later, you will need to pay a $100 government fee (for US trademarks).</HelperText>
      </QuestionPaper>

      <ContinueLink to="/next-step">
        <ContinueButton variant="contained">Continue</ContinueButton>
      </ContinueLink>

      <FooterText>
        The law firm responsible for the portion of this page constituting an advertisement is Swyft Legal, LLC who can be reached at support@swyftlegal.com. Swyft Legal, LLC is licensed by the Arizona Supreme Court under license number 70173. All legal services provided in connection with the attorney-led trademark process are provided by Swyft Legal, LLC. Trademark Engine is an affiliate of Swyft Legal, LLC.
      </FooterText>
      </Container>
    </ThemeProvider>
  );
};

export default TrademarkApplicationProcess;