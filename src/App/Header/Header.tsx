import React from 'react';
import styled from 'styled-components';

// Material-UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Navbar from './Navbar';

const Wrapper = styled(Container).attrs({
  component: 'header',
})`
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

  @media only screen and (min-width: 960px) {
    transform: rotate(-45deg);
  }
`;

const Name = styled(Typography)`
  grid-row: 1/2;
  grid-column: 1/4;
  color: ${(props): string => props.theme.azure};
  border-bottom: 5px solid ${(props): string => props.theme.azure};
  @media only screen and (min-width: 960px) {
    text-align: end;
    grid-column: 2/3;
  }
`;

const TitleAndNavWrapper = styled.div`
  grid-row: 2/3;
  grid-column: 1/4;
  display: flex;
  flex-direction: column;
  border-left: 5px solid ${(props): string => props.theme.orangeRed};
  padding-left: ${(props): string => props.theme.spacing(4)};

  @media only screen and (min-width: 960px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    grid-column: 2/3;
    border-left: 0;
  }
`;

const Title = styled(Typography).attrs({
  component: 'span',
  variant: 'h2',
})`
  color: ${(props): string => props.theme.orangeRed};
  margin-bottom: 0.35em;
  @media only screen and (min-width: 960px) {
    margin-bottom: 0;
    border-left: 5px solid ${(props): string => props.theme.orangeRed};
    writing-mode: vertical-lr;
  }
`;

const Header: React.FC = () => (
  <Wrapper id="header">
    <Grid>
      <Name variant={'h1'}>BRIAN MONACCIO</Name>
      <TitleAndNavWrapper>
        <Title>FRONTEND DEVELOPER</Title>
        <Navbar />
      </TitleAndNavWrapper>
    </Grid>
  </Wrapper>
);

export default Header;
