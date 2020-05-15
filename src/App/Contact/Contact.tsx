import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { IconContext } from 'react-icons';
import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = styled.footer`
  padding: 1rem 0;

  @media screen and (min-width: 1280px) {
    padding: 4rem 0;
  }
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
  padding: 1rem;
`;

const ContactSectionHeading = styled(Typography).attrs({
  variant: 'h3',
  component: 'h2',
  gutterBottom: true,
})`
  padding: 0.25rem 0.75rem;
  padding-bottom: 0;
`;

const iconStyles = { size: '48px', color: '#f95738' };

interface IconProps {
  icon: ReactNode;
}

const Icon: React.FC<IconProps> = ({ icon }) => (
  <IconContext.Provider value={iconStyles}>{icon}</IconContext.Provider>
);

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
};

const Contact: React.FC = () => {
  return (
    <Footer id="contact">
      <Container maxWidth={'lg'}>
        <Grid container>
          <ContactSection>
            <ContactSectionHeading>
              Let&#39;s get in touch
            </ContactSectionHeading>
            <Link
              href="mailto:brianmonaccio@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block' }}
            >
              Send me an email
            </Link>
            <Link
              href="https://www.linkedin.com/in/brian-monaccio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me on Linkedin
            </Link>
          </ContactSection>

          <ContactSection>
            <ContactSectionHeading>More Code</ContactSectionHeading>
            <Link
              href="https://github.com/learnsometing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my github profile
            </Link>
          </ContactSection>
          <ContactSection>
            <ContactSectionHeading>Social</ContactSectionHeading>
            <Grid item container justify={'center'} spacing={1}>
              <Grid item>
                <a
                  href="https://www.instagram.com/learnsometing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={<FaInstagramSquare />} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://twitter.com/brianmonaccio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={<FaTwitterSquare />} />
                </a>
              </Grid>
            </Grid>
          </ContactSection>
        </Grid>

        <Typography
          variant={'body2'}
          align={'center'}
          style={{ marginTop: '1rem' }}
        >
          &#169; {new Date().getFullYear()} Brian Monaccio
        </Typography>
      </Container>
    </Footer>
  );
};

export default Contact;
