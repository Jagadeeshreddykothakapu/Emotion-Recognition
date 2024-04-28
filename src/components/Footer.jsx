import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const footerSections = [
  {
    title: 'Quick Links',
    links: [
      'Trademark Registration',
      'Comprehensive Search',
      'Trademark Monitoring',
      'Free Trademark Search',
      'Copyright Registration',
      'Office Action Response',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Our Guarantee'],
  },
  {
    title: 'Connect With Us',
    links: ['Contact Us', 'Blog'],
    showSocialIcons: true,
  },
];

const Footer = () => {
  return (
    <Box component="footer" bgcolor="#d4a013" color="white" py={4}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href="#"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                  display="block"
                  mb={1}
                >
                  {link}
                </Link>
              ))}
              {section.showSocialIcons && (
                <Box display="flex" alignItems="center" mt={2}>
                  <Typography variant="body2" mr={2}>
                    Follow Us
                  </Typography>
                  <Link href="#" color="inherit" mr={1}>
                    <FaLinkedinIn />
                  </Link>
                  <Link href="#" color="inherit" mr={1}>
                    <FaTwitter />
                  </Link>
                  <Link href="#" color="inherit">
                    <FaFacebookF />
                  </Link>
                </Box>
              )}
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Any Questions?
            </Typography>
            <Typography variant="body2" mb={2}>
              Use the Live Chat for any immediate assistance.
            </Typography>
            <Typography variant="body2">
              Call Us <br />
              <Link href="tel:8777214579" color="inherit" underline="hover">
                (877) 721-4579
              </Link>
              <br />
              Mon-Fri 9AM-6PM CST
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            Trademark Engine provides information and software only. Trademark Engine is not a "lawyer referral service" and does not provide legal advice or participate in any legal representation. Use of Trademark Engine is subject to our Terms of Service and Privacy Policy.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;