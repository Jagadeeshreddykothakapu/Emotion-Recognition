import React, { useState } from 'react';
import { Typography, Box, Button, Container, Paper, Radio, RadioGroup, FormControlLabel, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)({
  marginTop: 32,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledPaper = styled(Paper)({
  padding: 24,
  maxWidth: 800,
  width: '100%',
  backgroundColor: '#f5f5f5',
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
});

const StyledRadioGroup = styled(RadioGroup)({
  marginTop: 16,
});

const StyledButton = styled(Button)({
  marginTop: 16,
  borderRadius: 24,
  padding: '12px 24px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  backgroundColor: '#1976d2',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

const SearchOptionCard = styled(Card)({
  marginBottom: 16,
  borderRadius: 8,
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginTop: theme.spacing(2),
}));

const TrademarkApplicationStep4 = () => {
  const [selectedSearch, setSelectedSearch] = useState('global');

  const handleSearchChange = (event) => {
    setSelectedSearch(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" align="center" color="orange" gutterBottom>
          Trademark Application Process - Step 4
        </Typography>
        <Typography variant="h6" align="center" color="maroon"gutterBottom>
          Would you rather have the assistance of a lawyer - starting at $399?
        </Typography>
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Know before you file! Get a Comprehensive Search Report.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Before paying the USPTO fees, you should do a quick search to see if your mark is already in use or registered by someone else.
            A search will help avoid obvious conflicts of pre-existing marks. Our Basic Federal Direct-Hit Search is included. There is a
            direct-hit search result for an existing or pending application we will let you know before any fees are paid to the USPTO so you
            can re-evaluate your mark choice or whether you want to move forward with the trademark process. If your company is just
            beginning, it's better to make name changes now rather than invest years building a brand only to learn that you have to change
            the name and lose all of your goodwill.
          </Typography>
          <Typography variant="body1" gutterBottom>
            For even more assurance, you may want to consider a more detailed search. While the basic free search covers the USPTO, it
            does not cover the 50 states, common law, domain names, international searches or include a detailed report. With more intel,
            you can make better choices. If you pick one of these options, you will still complete the application now. However, no application
            will be filed with the USPTO until you have had a chance to review any of the paid searches, approve the application in light of the
            searches or easily come back here and make some changes before your application is filed.
          </Typography>
        </Box>
        <Box mt={4}>
          <Typography variant="h6" color="orange"gutterBottom>
            What type of trademark search would you like us to conduct? Select one.
          </Typography>
          <Typography variant="body2" gutterBottom>
            The search you choose will be conducted on the words or text within your trademark.
          </Typography>
          <StyledRadioGroup value={selectedSearch} onChange={handleSearchChange}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SearchOptionCard>
                  <CardContent>
                    <FormControlLabel
                      value="basic"
                      control={<Radio />}
                      label="Basic Federal Direct-Hit Search (Included - Free)"
                    />
                    <Typography variant="body2" color="textSecondary">
                      Includes a basic search of USPTO database only
                    </Typography>
                  </CardContent>
                </SearchOptionCard>
              </Grid>
              <Grid item xs={12}>
                <SearchOptionCard>
                  <CardContent>
                    <FormControlLabel
                      value="federal"
                      control={<Radio />}
                      label="Federal & State Search (+$99) Most Popular"
                    />
                    <Typography variant="body2" color="textSecondary">
                      Provides any similar names, logos, or slogans that are registered or pending with the USPTO or in any of the 50 states
                    </Typography>
                  </CardContent>
                </SearchOptionCard>
              </Grid>
              <Grid item xs={12}>
                <SearchOptionCard>
                  <CardContent>
                    <FormControlLabel
                      value="comprehensive"
                      control={<Radio />}
                      label="Federal, State & Common Law Search (+$149) Recommended"
                    />
                    <Typography variant="body2" color="textSecondary">
                      Same as above, but also includes a proprietary search of corporate directories, common law and domain names.
                    </Typography>
                  </CardContent>
                </SearchOptionCard>
              </Grid>
              <Grid item xs={12}>
                <SearchOptionCard>
                  <CardContent>
                    <FormControlLabel
                      value="global"
                      control={<Radio />}
                      label="Global Comprehensive U.S. and International Search (+$229)"
                    />
                    <Typography variant="body2" color="textSecondary">
                      Same as above, but also includes searches for pending and registered marks in these multi-national jurisdictions: (i) The European community; and (ii) the
                      World Intellectual Property Organization (WIPO)
                    </Typography>
                  </CardContent>
                </SearchOptionCard>
              </Grid>
            </Grid>
          </StyledRadioGroup>
        </Box>
        <Box display="flex" justifyContent="flex-end" marginTop={4}>
        <StyledLink to="/next-page">
            <StyledButton variant="contained" color="primary">
              Continue
            </StyledButton>
          </StyledLink>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default TrademarkApplicationStep4;