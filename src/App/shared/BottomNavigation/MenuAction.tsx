import React, { useState } from 'react';
import styled from 'styled-components';

import { MdMenu } from 'react-icons/md';

// Material-UI
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';

import NavigationDrawer from './NavigationDrawer';

const MenuIcon = styled(MdMenu)`
  height: ${(props): string => props.theme.bottomNavigationIconSize};
  width: ${(props): string => props.theme.bottomNavigationIconSize};
  color: ${(props): string => props.theme.textEmphasis};
`;

const MenuAction: React.FC = () => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const toggleNavDrawer = (): void => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  };

  return (
    <>
      <BottomNavigationAction
        label={
          <Typography variant={'h5'} component={'span'}>
            Menu
          </Typography>
        }
        showLabel
        icon={<MenuIcon />}
        onClick={toggleNavDrawer}
      />
      <NavigationDrawer isOpen={isNavDrawerOpen} toggle={toggleNavDrawer} />
    </>
  );
};

export default MenuAction;
