import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

// CSS
import './index.css';

// Icons
import { IconContext } from '@react-icons/all-files';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { MdMail } from '@react-icons/all-files/md/MdMail';

// StyledComponents
import scTheme from '../shared/SCTheme';
import styled from 'styled-components';

const IconWrapper = styled.div`
  border-radius: 4px;
  height: 48px;
  position: relative;
  width: 48px;
`;

const IconBackground = styled.div`
  background-color: ${(props) => props.theme.mintCream};
  border-radius: 5px;
  height: 42px;
  left: 3px;
  position: absolute;
  top: 3px;
  width: 42px;
`;

const iconStyles = {
  className: 'icon',
  color: scTheme.persianGreen,
  size: '48px',
};

interface SocialIconProps {
  icon: ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <IconWrapper>
    <IconBackground />
    <IconContext.Provider value={iconStyles}>{icon}</IconContext.Provider>
  </IconWrapper>
);

SocialIcon.propTypes = {
  icon: PropTypes.node.isRequired,
};

export const InstagramIcon: React.FC = () => (
  <SocialIcon icon={<FaInstagramSquare />} />
);

export const TwitterIcon: React.FC = () => (
  <SocialIcon icon={<FaTwitterSquare />} />
);
