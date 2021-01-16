import React, { useContext, useRef, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import gsap from 'gsap';

// Material-UI
import { Container, Typography } from '@material-ui/core';

// React Icons
import { IconContext } from '@react-icons/all-files';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import Navbar from './Navbar';

const Wrapper = styled(Container).attrs({
  component: 'header',
})`
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: ${(props): string => props.theme.spacing(4)} 0;
`;

const Name = styled(Typography)`
  grid-row: 1/2;
  grid-column: 1/4;
  color: ${(props): string => props.theme.blueSapphire};
  background-color: #fff;
  border-bottom: 5px solid ${(props): string => props.theme.blueSapphire};
  z-index: 2;
  opacity: 0;
  transform: translateX(-100px);
`;

const TitleAndNavWrapper = styled.div`
  grid-row: 2/3;
  grid-column: 1/4;
  display: flex;
  flex-direction: column;
  border-left: 5px solid ${(props): string => props.theme.metallicSeaweed};
  padding-left: ${(props): string => props.theme.spacing(4)};
  z-index: 1;
  opacity: 0;
  transform: translateY(-70px);
`;

const Title = styled(Typography).attrs({
  component: 'span',
  variant: 'h2',
})`
  color: ${(props): string => props.theme.metallicSeaweed};
  margin-bottom: 0.35em;
`;

const Header: React.FC = () => {
  const name = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    gsap.to(name.current, {
      duration: 1,
      opacity: 1,
      x: 0,
      ease: 'power3.inOut',
    });

    gsap.to(title.current, {
      duration: 1,
      delay: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power3.inOut',
    });
  });

  return (
    <Wrapper id="header">
      <Grid>
        <Name variant={'h1'} ref={name}>
          BRIAN MONACCIO
        </Name>
        <TitleAndNavWrapper ref={title}>
          <Title>SOFTWARE DEVELOPER</Title>
          <Navbar />
        </TitleAndNavWrapper>
      </Grid>
      <ContinueScrollingIcon />
    </Wrapper>
  );
};
export default Header;

const ContinueScrollingIconWrapper = styled.div`
  align-items: center;
  bottom: 50px;
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: absolute;
`;

function ContinueScrollingIcon() {
  const name = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    gsap.fromTo(
      name.current,
      {
        opacity: 0,
      },
      {
        delay: 1.25,
        opacity: 1,
        ease: 'power3.inOut',
      }
    );

    gsap.to(name.current, {
      delay: 1.25,
      duration: 0.85,
      repeat: -1,
      y: 50,
      yoyo: true,
      ease: 'power3.inOut',
    });
  });

  return (
    <ContinueScrollingIconWrapper ref={name}>
      <IconContext.Provider
        value={{
          style: { color: theme.blueSapphire, fontSize: '2rem' },
        }}
      >
        <FaChevronDown />
      </IconContext.Provider>
    </ContinueScrollingIconWrapper>
  );
}
