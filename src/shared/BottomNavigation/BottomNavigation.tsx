import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';

import Paper from '@material-ui/core/Paper';

import NavigationDrawer from './NavigationDrawer';

const Toggle = styled(Paper)`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
  margin-bottom: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fdfde8;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const CollapsedNavigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Toggle elevation={2}>
        <Hamburger
          color="#f95738"
          toggled={isDrawerOpen}
          toggle={toggleDrawer}
        />
      </Toggle>
      <NavigationDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default CollapsedNavigation;
