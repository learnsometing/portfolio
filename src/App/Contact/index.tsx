import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { IconContext } from '@react-icons/all-files';
import { MdMail } from '@react-icons/all-files/md/MdMail';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';

import Section from '../shared/Section';
import scTheme from '../shared/SCTheme';

const Footer = styled(Section).attrs({
  as: 'footer',
})`
  background-color: ${(props): string => props.theme.bgLightened};
  min-height: 370px;
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
  padding: ${(props): string => props.theme.spacing(4)};
`;

const ContactSectionHeading = styled(Typography).attrs({
  variant: 'h3',
  component: 'h2',
  gutterBottom: true,
})`
  padding: ${(props): string =>
    `${props.theme.spacing(1)} ${props.theme.spacing(3)}`};
  padding-bottom: 0;
`;

const ContactButton = styled(Button).attrs({
  component: 'a',
  variant: 'outlined',
  color: 'primary',
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  margin: ${(props): string => props.theme.spacing(2)} 0;
`;

const CopyrightNotice = styled(Typography)`
  margin-top: ${(props): string => props.theme.spacing(4)};
`;

const iconStyles = { size: '48px', color: scTheme.textEmphasis };

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
                  <Icon icon={<FaInstagramSquare />} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://twitter.com/brianmonaccio"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to Brian's twitter account"
                >
                  <Icon icon={<FaTwitterSquare />} />
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
