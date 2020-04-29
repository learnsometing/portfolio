import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Navbar } from 'react-bootstrap';
import Hamburger from 'hamburger-react';
import FluidTypography from './FluidTypography';

const NavBar = styled(Navbar)`
  margin-bottom: 0.5rem;
  z-index: 1060 !important;

  @media screen and (min-width: 768px) {
    display: none !important;
  }
`;

const Toggle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
  background-color: #f4d35e !important;
  box-shadow: 0px 3px 5px rgba(0%, 0%, 0%, 0.5);
`;

interface MenuProps {
  isMenuOpen: boolean;
  isMenuClosing: boolean;
}

const Menu = styled.nav<MenuProps>`
  display: flex;
  position: absolute;
  visibility: hidden;
  background-color: #fdfde8;
  ${({ isMenuOpen, isMenuClosing }): string | undefined => {
    if (isMenuOpen) {
      return 'animation: slide-in .25s ease-in-out 1 forwards';
    }
    if (isMenuClosing) {
      return 'animation: slide-out .25s ease-in-out 1 forwards';
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
      return 'animation: slide-in .25s ease-in-out 1 forwards';
    }
    if (isMenuClosing) {
      return 'animation: slide-out .25s ease-in-out 1 forwards';
    }
  }};

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

  &:nth-child(n) {
    ${({ isMenuOpen, isMenuClosing }): string | undefined => {
      if (isMenuOpen) {
        return 'animation: fade-in .2s ease-in-out 1 forwards';
      }
      if (isMenuClosing) {
        return 'animation: fade-out .2s ease-in-out 1 forwards';
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
  }
  z-index: 1050;
`;

const MenuLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f95738 !important;
`;

const NavLink = styled(FluidTypography).attrs(() => ({
  minFontSize: '24px',
  maxFontSize: '32px',
  minViewportWidth: '320px',
  maxViewportWidth: '767px',
}))`
  color: #f95738 !important;
  font-family: mr-eaves-xl-modern;
  font-weight: bold;
  margin: 0.5rem 0;

  &:hover {
    color: #1b065e !important;
    text-decoration: none;
  }
`;

const CollapsedNavigation: React.FC = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const toggleModal = (): void => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
    }
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavBar fixed="bottom">
        <Toggle className={'ml-auto'}>
          <Hamburger
            color="#0d3b66"
            toggled={isMenuOpen}
            toggle={toggleModal}
          />
        </Toggle>
      </NavBar>
      <Menu isMenuOpen={isMenuOpen} isMenuClosing={isMenuClosing}>
        <MenuGrid isMenuOpen={isMenuOpen} isMenuClosing={isMenuClosing}>
          <MenuLink to="/">
            <NavLink as="span">Home</NavLink>
          </MenuLink>
          <MenuLink to="/portfolio">
            <NavLink as="span">Portfolio</NavLink>
          </MenuLink>
          <MenuLink to="/about">
            <NavLink as="span">About</NavLink>
          </MenuLink>
          <MenuLink to="/contact">
            <NavLink as="span">Contact</NavLink>
          </MenuLink>
        </MenuGrid>
      </Menu>
    </>
  );
};

export default CollapsedNavigation;
