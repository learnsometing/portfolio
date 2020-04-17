import React, { ReactElement } from 'react';
import styled from 'styled-components';
import FlexContainer from '../../shared/FlexContainer';
import FluidTypography from '../../shared/FluidTypography';

const FullHeightSection = styled(FlexContainer)`
  height: 100vh;
`;

const GreetingText = styled(FluidTypography).attrs(() => ({
  minFontSize: '1.2rem',
  maxFontSize: '2rem',
  minViewportWidth: '320px',
  maxViewportWidth: '960px',
}))`
  text-align: center;
  line-height: 1.3;
  font-family: 'Source Code Pro';
`;

export default function Introduction(): ReactElement {
  return (
    <FullHeightSection
      as="section"
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <GreetingText>
        Hello, my name is <strong>Brian Monaccio!</strong>
      </GreetingText>
      <GreetingText>
        I&#39;m a <strong>full-stack web developer </strong> and{' '}
        <strong> JavaScript specialist</strong> living in Beacon, New York.
      </GreetingText>
    </FullHeightSection>
  );
}
