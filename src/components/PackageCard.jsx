// src/components/PackageCard.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2.5),
  margin: theme.spacing(2),
}));

const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
  '& .MuiButton-root': {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const PackageCard = ({ name, description, price, includes }) => {
  return (
    <StyledCard variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="h6" component="div">
          {price}
        </Typography>
        <RouterLink to="/get-started" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" style={{ margin: '16px 0' }}>
            Get Started
          </Button>
        </RouterLink>
        <List>
          {includes.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
};

export default PackageCard;
