import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';

const CloseButton = styled.button`
  display: flex;
  background-color: #fdfde8;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const CloseIcon: React.FC = () => (
  <IconContext.Provider value={{ size: '3em', color: '#f95738' }}>
    <MdClose />
  </IconContext.Provider>
);

interface Props {
  onClick: () => void;
}

const Close: React.FC<Props> = ({ onClick }) => (
  <CloseButton onClick={onClick}>
    <CloseIcon />
  </CloseButton>
);

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Close;
