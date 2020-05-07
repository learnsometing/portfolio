import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';

import Drawer from '@material-ui/core/Drawer';

const FulllHeightDrawer = styled(Drawer)`
  height: 100vh;
`;

const Close = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: #fdfde8;
  cursor: pointer;
`;

const closeIcon = (
  <IconContext.Provider value={{ size: '3rem', color: '#f95738' }}>
    <MdClose />
  </IconContext.Provider>
);

interface DrawerBaseProps {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
}

const DrawerBase: React.FC<DrawerBaseProps> = ({
  isOpen,
  toggle,
  children,
}) => {
  return (
    <FulllHeightDrawer anchor={'top'} open={isOpen} elevation={2}>
      {children}
      <Close onClick={toggle}>{closeIcon}</Close>
    </FulllHeightDrawer>
  );
};

DrawerBase.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default DrawerBase;
