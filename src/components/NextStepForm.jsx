import React, { useState } from 'react';
import { Typography, Box, Divider, FormControl, RadioGroup, FormControlLabel, Radio, TextField, Button, Container, Paper } from '@mui/material';
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
  backgroundColor: '#f5f5f5',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: `${theme.spacing(2)}px 0`,
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
}));

const USStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' }
];

const TrademarkApplicationStep2 = () => {
  const [ownerType, setOwnerType] = useState('individual');

  return (
    <StyledContainer>
      <StyledPaper>
        {/* ... (Trademark Application Process - Step 2 content remains the same) ... */}
        <Typography variant="h6" align="center" gutterBottom>
          Trademark Application Process - Step 2
        </Typography>
        <Typography align="center" gutterBottom>
          Would you rather have the assistance of a lawyer - starting at $399?
        </Typography>
        <Typography align="center" gutterBottom>
          Will the trademark be owned by an individual or an entity such as a corporation or LLC?
          Identify the owner of the trademark. This is the person or organization who will be the owner of record. If you choose individuals,
          you can enter as many names as you want who own the mark. With an organization, you will have to identify someone to be the
          person of contact for the organization.
        </Typography>
        <StyledDivider />
        <StyledFormControl component="fieldset">
          <RadioGroup row value={ownerType} onChange={(e) => setOwnerType(e.target.value)}>
            <FormControlLabel value="individual" control={<Radio />} label="Individual" />
            <FormControlLabel value="organization" control={<Radio />} label="Organization" />
          </RadioGroup>
        </StyledFormControl>
        {ownerType === 'individual' ? (
          <Box mt={2}>
            
            <StyledTextField label="First Name" fullWidth />
          <StyledTextField label="Last Name" fullWidth />
          <StyledTextField label="Address 1" fullWidth />
          <StyledTextField label="City" fullWidth />
          <StyledTextField
  label=""
  fullWidth
  select
  SelectProps={{
    native: true,
  }}
  defaultValue="" // Add defaultValue prop
>
  <option value="" disabled>
    Select State
  </option>
  {USStates.map((state) => (
    <option key={state.code} value={state.code}>
      {state.name}
    </option>
  ))}
</StyledTextField>
          <StyledTextField label="Zip/Postal Code" fullWidth />
          <StyledTextField
  label="Country of Citizenship"
  fullWidth
  select
  defaultValue="" // Add defaultValue prop
>
  <option value="" disabled>
    Select Country
  </option>
  <option value="United States">United States</option>
  {/* Add more country options */}
</StyledTextField>
          <StyledTextField label="Email" fullWidth />
          <StyledTextField label="Phone" fullWidth />
          <Typography variant="caption" align="center">
            I consent to receiving SMS text messages and phone calls from Trademark
            Engine.
          </Typography>
          </Box>
          
        ) : (
          <Box mt={2}>
            <StyledTextField label="Organization Name" fullWidth />
            <StyledTextField
  label="Organization Type"
  fullWidth
  select
  defaultValue="" // Add defaultValue prop
>
  <option value="" disabled>
    Select Organization Type
  </option>
  <option value="llc">LLC</option>
  <option value="s_corporation">S Corporation</option>
  <option value="l_corporation">L Corporation</option>
  <option value="non_profit">Non Profit</option>
  <option value="partnership">Partnership</option>
  <option value="sole_proprietorship">Sole Proprietorship</option>
  <option value="trust">Trust</option>
  <option value="others">Others</option>
</StyledTextField>
<StyledTextField
  label="Country of Citizenship"
  fullWidth
  select
  defaultValue="" // Add defaultValue prop
>
  <option value="" disabled>
    Select Country
  </option>
  <option value="United States">United States</option>
  {/* Add more country options */}
</StyledTextField>
            <StyledTextField label="Position" fullWidth />
            <StyledTextField label="First Name" fullWidth />
            <StyledTextField label="Last Name" fullWidth />
            <StyledTextField label="Address 1" fullWidth />
            <StyledTextField label="City" fullWidth />
            <StyledTextField
  label=""
  fullWidth
  select
  SelectProps={{
    native: true,
  }}
  defaultValue="" // Add defaultValue prop
>
  <option value="" disabled>
    Select State
  </option>
  {USStates.map((state) => (
    <option key={state.code} value={state.code}>
      {state.name}
    </option>
  ))}
</StyledTextField>
            <StyledTextField label="Zip/Postal Code" fullWidth />
            <StyledTextField label="Country of Citizenship" fullWidth select>
              <option value="">Select Country</option>
              {/* Add country options */}
            </StyledTextField>
            <StyledTextField label="Email" fullWidth />
            <StyledTextField label="Phone" fullWidth />
            <Typography variant="caption" align="center">
              I consent to receiving SMS text messages and phone calls from Trademark
              Engine.
            </Typography>
          </Box>
        )}
        <StyledButton variant="outlined">
          Click on "Continue" to save your application.
        </StyledButton>
        <Box mt={2} display="flex" justifyContent="center">
        <StyledLink to="/application-form-info">
            <StyledButton variant="contained" color="primary">
              Continue
            </StyledButton>
          </StyledLink>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default TrademarkApplicationStep2;