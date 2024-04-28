//step2, nextstepform

import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, TextField, Button, FormControl, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(4),
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const OwnershipType = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AddOwnerButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const OwnerFields = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ContinueButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff5a5f',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#e64a4e',
  },
  marginTop: theme.spacing(2),
}));

const TrademarkApplicationProcess = () => {
  const [ownershipType, setOwnershipType] = useState('Individual');
  const [showOwnerFields, setShowOwnerFields] = useState(false);

  const handleOwnershipTypeChange = (event) => {
    setOwnershipType(event.target.value);
    setShowOwnerFields(false);
  };

  const handleAddOwnerClick = () => {
    setShowOwnerFields(true);
  };

  return (
    <Container>
      <Heading variant="h4">Trademark Application Process - Step 2</Heading>
      <Typography variant="body1">Would you rather have the assistance of a lawyer - starting at $399?</Typography>

      <Typography variant="subtitle1">Will the trademark be owned by an individual or an entity such as a corporation or LLC?</Typography>
      <OwnershipType>
        <RadioGroup value={ownershipType} onChange={handleOwnershipTypeChange}>
          <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
          <FormControlLabel value="Organization" control={<Radio />} label="Organization" />
        </RadioGroup>
      </OwnershipType>

      {ownershipType === 'Individual' && (
        <>
          {showOwnerFields ? (
            <OwnerFields>
              <TextField label="First Name" fullWidth margin="normal" />
              <TextField label="Last Name" fullWidth margin="normal" />
              <TextField label="Address" fullWidth margin="normal" />
              <TextField label="City" fullWidth margin="normal" />
              <Select label="State/Province/Region" fullWidth margin="normal">
                <MenuItem value="Ohio">Ohio</MenuItem>
              </Select>
              <TextField label="Zip/Postal Code" fullWidth margin="normal" />
              <Select label="Country of Citizenship" fullWidth margin="normal">
                <MenuItem value="United States">United States</MenuItem>
              </Select>
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Phone" fullWidth margin="normal" />
            </OwnerFields>
          ) : (
            <AddOwnerButton variant="contained" onClick={handleAddOwnerClick}>
              Add Owner
            </AddOwnerButton>
          )}
        </>
      )}

      {ownershipType === 'Organization' && (
        <OwnerFields>
          <TextField label="Organization Name" fullWidth margin="normal" />
          <Select label="Organization Type" fullWidth margin="normal">
            <MenuItem value="">Choose Organization Type</MenuItem>
          </Select>
          <Select label="State of Formation" fullWidth margin="normal">
            <MenuItem value="">Select State of Formation</MenuItem>
          </Select>
          <TextField label="Position" fullWidth margin="normal" />
          <TextField label="First Name" fullWidth margin="normal" />
          <TextField label="Last Name" fullWidth margin="normal" />
          <TextField label="Address" fullWidth margin="normal" />
          <TextField label="City" fullWidth margin="normal" />
          <Select label="State/Province/Region" fullWidth margin="normal">
            <MenuItem value="Ohio">Ohio</MenuItem>
          </Select>
          <TextField label="Zip/Postal Code" fullWidth margin="normal" />
          <Select label="Country of Citizenship" fullWidth margin="normal">
            <MenuItem value="United States">United States</MenuItem>
          </Select>
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Phone" fullWidth margin="normal" />
        </OwnerFields>
      )}

      <ContinueButton variant="contained">Continue</ContinueButton>
    </Container>
  );
};

export default TrademarkApplicationProcess;