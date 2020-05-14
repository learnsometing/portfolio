import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';

const FullHeightDrawer = styled(Drawer)`
  height: 100vh;
`;

const DrawerBG = styled(Paper)`
  overflow-y: auto;
  background-color: #fdfde8;
  min-height: 100vh;
`;

interface DrawerBaseProps {
  isOpen: boolean;
  children: ReactNode;
}

const DrawerBase: React.FC<DrawerBaseProps> = ({ isOpen, children }) => {
  return (
    <FullHeightDrawer
      anchor={'top'}
      open={isOpen}
      elevation={2}
      transitionDuration={400}
      PaperProps={{ component: DrawerBG }}
    >
      {children}
    </FullHeightDrawer>
  );
};

DrawerBase.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default DrawerBase;
