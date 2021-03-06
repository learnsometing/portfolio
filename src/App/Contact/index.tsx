import React from 'react';
import styled from 'styled-components';

// Custom Components
import Section from '../shared/Section';
import { InstagramIcon, TwitterIcon } from '../SocialIcons';

// Icons
import { MdMail } from '@react-icons/all-files/md/MdMail';

// Material UI
import { Button, Container, Grid, Typography } from '@material-ui/core';

const Footer = styled(Section).attrs({
  as: 'footer',
})`
  background-color: ${(props): string => props.theme.metallicSeaweed};
`;

const ContactSection = styled(Grid).attrs({
  component: 'section',
  item: true,
  xs: 12,
  sm: 12,
  md: 4,
  container: true,
  direction: 'column',
  alignItems: 'center',
})`
  padding: ${(props): string => props.theme.spacing(2)};
`;

const ContactSectionHeading = styled(Typography).attrs({
  variant: 'h3',
  component: 'h2',
  gutterBottom: true,
})`
  color: ${(props) => props.theme.mintCream};
  padding: ${(props): string =>
    `${props.theme.spacing(1)} ${props.theme.spacing(3)}`};
  padding-bottom: 0;
`;

const ContactButton = styled(Button).attrs({
  component: 'a',
  variant: 'contained',
  color: 'primary',
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  margin: ${(props): string => props.theme.spacing(2)} 0;
  color: ${(props): string => props.theme.mintCream};
`;

const CopyrightNotice = styled(Typography)`
  margin-top: ${(props): string => props.theme.spacing(4)};
`;

const Contact: React.FC = () => {
  return (
    <Footer id="contact">
      <Container maxWidth={'lg'}>
        <Grid container>
          <ContactSection>
            <ContactSectionHeading>
              Let&#39;s get in touch
            </ContactSectionHeading>
            <ContactButton
              href="mailto:brianmonaccio@protonmail.com"
              endIcon={<MdMail />}
            >
              Send me an email
            </ContactButton>
            <ContactButton href="https://www.linkedin.com/in/brian-monaccio/">
              Connect with me on Linkedin
            </ContactButton>
          </ContactSection>

          <ContactSection>
            <ContactSectionHeading>More Code</ContactSectionHeading>
            <ContactButton href="https://github.com/learnsometing">
              Visit my github profile
            </ContactButton>
          </ContactSection>
          <ContactSection>
            <ContactSectionHeading>Social</ContactSectionHeading>
            <Grid item container justify={'center'} spacing={1}>
              <Grid item>
                <a
                  href="https://www.instagram.com/learnsometing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to Brian's instagram account"
                >
                  <InstagramIcon />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://twitter.com/brianmonaccio"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to Brian's twitter account"
                >
                  <TwitterIcon />
                </a>
              </Grid>
            </Grid>
          </ContactSection>
        </Grid>

        <CopyrightNotice variant={'body2'} align={'center'}>
          &#169; {new Date().getFullYear()} Brian Monaccio
        </CopyrightNotice>
      </Container>
    </Footer>
  );
};

export default Contact;
