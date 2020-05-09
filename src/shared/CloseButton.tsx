import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';

const CloseButton = styled.button`
  background-color: #fdfde8;
  border: none;
  cursor: pointer;
`;

const CloseIcon: React.FC = () => (
  <IconContext.Provider value={{ size: '3rem', color: '#f95738' }}>
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

export default Close;
