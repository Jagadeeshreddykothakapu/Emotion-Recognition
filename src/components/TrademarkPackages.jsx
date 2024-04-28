import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { Link as RouterLink } from 'react-router-dom';

const Section = styled(Box)(({ theme }) => ({
  backgroundColor: '#1A237E',
  padding: theme.spacing(6),
  color: '#FFFFFF',
  textAlign: 'center',
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

const Package = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  color: '#000000',
}));

const PackageHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const Price = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '2rem',
  marginBottom: theme.spacing(2),
}));

const ListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const CheckIconStyled = styled(CheckIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const StyledLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
}));


const PricingSection = () => {
  return (
      <Section>
        <Heading variant="h4">
          Start protecting your business today
        </Heading>
        <Typography variant="subtitle1" gutterBottom>
          Secure your brand's future with a fast and easy online trademark application.
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3}>
            <Package>
              <PackageHeading variant="h6">Basic Package</PackageHeading>
              <Typography variant="body1">I only need what it takes to file</Typography>
              <Price variant="h5">$99</Price>
              <Typography variant="body2">+ USPTO filing fees</Typography>
              <StyledLink to="/get-started">
              <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
                Get Started
              </Button>
            </StyledLink>
              <Box mt={4}>
                <Typography variant="body2">Includes:</Typography>
                <ListItem>
                  <CheckIconStyled />
                  <Typography variant="body2">
                    Preparation and filing of your federal trademark application
                  </Typography>
                </ListItem>
                <ListItem>
                  <CheckIconStyled />
                  <Typography variant="body2">
                    Search the federal trademark database for your chosen mark
                  </Typography>
                </ListItem>
                <ListItem>
                  <CheckIconStyled />
                  <Typography variant="body2">
                    Electronic delivery of your trademark registration certificate
                  </Typography>
                </ListItem>
              </Box>
            </Package>
          </Grid>
          <Grid item xs={12} sm={3}>
          <Package>
            <PackageHeading variant="h6">Standard Package</PackageHeading>
            <Typography variant="body1">I want to register & enforce my trademark</Typography>
            <Price variant="h5">$149</Price>
            <Typography variant="body2">+ USPTO filing fees</Typography>
            <StyledLink to="/get-started">
              <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
                Get Started
              </Button>
              </StyledLink>
            <Box mt={4}>
              <Typography variant="body2">Includes Basic package, plus:</Typography>
              <ListItem>
                <CheckIconStyled />
                <Typography variant="body2">
                  Cease & Desist letter to enforce your trademark ($35 value)
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIconStyled />
                <Typography variant="body2">
                  Custom Trademark Assignment ($35 value)
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIconStyled />
                <Typography variant="body2">
                  Lifetime customer support (phone, chat, & email)
                </Typography>
              </ListItem>
            </Box>
          </Package>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Package>
            <PackageHeading variant="h6">Attorney-Led Registration</PackageHeading>
            <Typography variant="body1">I want an expert to review my application</Typography>
            <Price variant="h5">$399</Price>
            <Typography variant="body2">+ USPTO filing fees</Typography>
            <StyledLink to="/get-started">
              <Button variant="contained" color="secondary" sx={{ marginTop: 4 }}>
                Help Me Register My Trademark
              </Button>
            </StyledLink>
            <Box mt={4}>
              <Typography variant="body2">Includes everything in the standard package, plus:</Typography>
              <ListItem>
                <CheckIconStyled />
                <Typography variant="body2">
                  Consultation with a trademark lawyer before filing
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIconStyled />
                <Typography variant="body2">
                  Comprehensive trademark search
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIconStyled />
                <Typography variant="body2">
                  Trademark Monitoring infringement alerts (free trial*)
                </Typography>
              </ListItem>
            </Box>
          </Package>
        </Grid>
      </Grid>
      </Section>
    );
};

export default PricingSection;