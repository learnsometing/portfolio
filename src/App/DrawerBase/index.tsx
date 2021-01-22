import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';

const DrawerBG = styled(Paper)`
  overflow-y: auto;
  background-color: ${(props): string => props.theme.white};
  min-height: 100vh;
  overflow-x: hidden;
`;

interface DrawerBaseProps {
  isOpen: boolean;
  children: ReactNode;
}

const DrawerBase: React.FC<DrawerBaseProps> = ({ isOpen, children }) => {
  return (
    <Drawer
      anchor={'top'}
      open={isOpen}
      elevation={2}
      transitionDuration={400}
      PaperProps={{ component: DrawerBG }}
      variant={'persistent'}
    >
      {children}
    </Drawer>
  );
};

DrawerBase.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default DrawerBase;
