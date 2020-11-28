import React, { useState } from 'react';
import styled from 'styled-components';

import { MdMenu } from '@react-icons/all-files/md/MdMenu';

// Material-UI
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';

import DrawerBase from './DrawerBase';
import NavigationMenu from './NavigationMenu';

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
      <DrawerBase isOpen={isNavDrawerOpen}>
        <NavigationMenu toggle={toggleNavDrawer} />
      </DrawerBase>
    </>
  );
};

export default MenuAction;
