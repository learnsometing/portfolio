import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import { NavLink, LinkText } from './Navigation';

const Toggle = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1060;
  margin-bottom: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
  background-color: #f4d35e !important;
  box-shadow: 0px 3px 5px rgba(0%, 0%, 0%, 0.5);

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

interface MenuProps {
  isMenuOpen: boolean;
  isMenuClosing: boolean;
}

const Menu = styled.nav<MenuProps>`
  display: flex;
  position: fixed;
  visibility: hidden;
  background-color: #fdfde8;
  ${({ isMenuOpen, isMenuClosing }): string | undefined => {
    if (isMenuOpen) {
      return 'animation: slide-in .2s ease-in-out 1 forwards';
    }
    if (isMenuClosing) {
      return 'animation: slide-out .2s ease-in-out 1 forwards';
    }
  }};
  z-index: 1050;

  @keyframes slide-in {
    from {
      height: 0;
      width: 100vw;
      visibility: hidden;
    }

    to {
      height: 100vh;
      width: 100vw;
      visibility: visible;
    }
  }

  @keyframes slide-out {
    from {
      height: 100vh;
      width: 100vw;
      visibility: visible;
    }

    to {
      height: 0;
      width: 100vw;
      visibility: hidden;
    }
  }
`;

const MenuGrid = styled.div<MenuProps>`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: auto;

  ${({ isMenuOpen, isMenuClosing }): string | undefined => {
    if (isMenuOpen) {
      return 'animation: fade-in .50s ease-in-out 1 forwards';
    }
    if (isMenuClosing) {
      return 'animation: fade-out .1s ease-in-out 1 forwards';
    }
  }};

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  z-index: 1050;
`;

const MenuLink = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const MenuLinkText = styled(LinkText).attrs(() => ({
  minFontSize: '24px',
  maxFontSize: '32px',
  minViewportWidth: '320px',
  maxViewportWidth: '767px',
}))``;

const CollapsedNavigation: React.FC = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const toggleModal = (): void => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
    } else {
      setIsMenuClosing(false);
    }
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Toggle>
        <Hamburger color="#0d3b66" toggled={isMenuOpen} toggle={toggleModal} />
      </Toggle>
      <Menu isMenuOpen={isMenuOpen} isMenuClosing={isMenuClosing}>
        <MenuGrid isMenuOpen={isMenuOpen} isMenuClosing={isMenuClosing}>
          <MenuLink to="/">
            <MenuLinkText as="span">Home</MenuLinkText>
          </MenuLink>
          <MenuLink to="/portfolio">
            <MenuLinkText as="span">Portfolio</MenuLinkText>
          </MenuLink>
          <MenuLink to="/about">
            <MenuLinkText as="span">About</MenuLinkText>
          </MenuLink>
          <MenuLink to="/contact">
            <MenuLinkText as="span">Contact</MenuLinkText>
          </MenuLink>
        </MenuGrid>
      </Menu>
    </>
  );
};

export default CollapsedNavigation;
