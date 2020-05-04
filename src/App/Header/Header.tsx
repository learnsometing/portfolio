import React, { ReactElement } from 'react';
import styled from 'styled-components';
import FluidTypography from '../../shared/FluidTypography';
import Navbar from './Navbar';

const Wrapper = styled.header`
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
  gap: 10px 0;

  @media only screen and (min-width: 768px) {
    transform: rotate(-45deg);
  }
`;

const Name = styled(FluidTypography).attrs(() => ({
  minFontSize: '24px',
  maxFontSize: '40px',
  minViewportWidth: '320px',
  maxViewportWidth: '960px',
}))`
  grid-row: 1/2;
  grid-column: 1/4;
  color: #0d3b66;
  border-bottom: 5px solid #0d3b66;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    text-align: end;
    grid-column: 2/3;
  }
`;

const TitleContainer = styled.div`
  grid-row: 2/3;
  grid-column: 1/4;
  display: flex;
  flex-direction: column;
  border-left: 5px solid #f4d35e;
  padding-left: 0.75rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    grid-column: 2/3;
    border-left: 0;
  }
`;

const Title = styled(FluidTypography).attrs(() => ({
  minFontSize: '20px',
  maxFontSize: '30px',
  minViewportWidth: '320px',
  maxViewportWidth: '960px',
}))`
  color: #f4d35e;
  @media only screen and (min-width: 768px) {
    border-left: 5px solid #f4d35e;
    writing-mode: vertical-lr;
  }
`;

export default function Header(): ReactElement {
  return (
    <Wrapper>
      <Grid>
        <Name as="h1">BRIAN MONACCIO</Name>
        <TitleContainer>
          <Title as="h1">FRONTEND DEVELOPER</Title>
          <Navbar />
        </TitleContainer>
      </Grid>
    </Wrapper>
  );
}
