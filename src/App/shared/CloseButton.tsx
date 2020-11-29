import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from '@react-icons/all-files';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import theme from './SCTheme';
interface CloseButtonProps {
  onClick: () => void;
}

const CloseIcon: React.FC = () => (
  <IconContext.Provider value={{ size: '3em', color: theme.mintCream }}>
    <MdClose />
  </IconContext.Provider>
);

export const CloseButton = styled.button.attrs({
  children: <CloseIcon />,
})<CloseButtonProps>`
  display: flex;
  background-color: ${(props): string => props.theme.metallicSeaweed};
  padding: 0;
  border: none;
  cursor: pointer;
`;

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const MenuCloseButton = styled(CloseButton)`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2vh 0;
`;
