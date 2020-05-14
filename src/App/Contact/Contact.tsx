import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { IconContext } from 'react-icons';
import { MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

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
    <footer id="contact">
      <Container maxWidth={'lg'}>
        <Grid container spacing={2} justify={'center'}>
          <Grid item>
            <a
              href="mailto:brianmonaccio@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={<MdMail />} />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://github.com/learnsometing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <Icon icon={<FaGithubSquare />} />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.linkedin.com/in/brian-monaccio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={<FaLinkedin />} />
            </a>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify={'center'}>
          <Grid item>
            <Typography variant={'body2'} gutterBottom>
              Developed with ❤️ in Beacon, NY
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={'body2'} gutterBottom>
              {new Date().getFullYear()} Brian Monaccio, all rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Contact;
