import React, { ReactElement } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Material-UI
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// SwipeableViews
import SwipeableViews from 'react-swipeable-views';

//Icons
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// Interfaces
import ChildImageSharp from '../shared/ChildImageSharp';

export interface Slide {
  src: ChildImageSharp;
  altText: string;
  caption?: string;
}

interface Props {
  slides: Slide[];
}

const CarouselHeader = styled(Paper)`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: ${({ theme }): string => theme.spacing(1)}px;
  background-color: ${({ theme }): string => theme.palette.background.default};
`;

const Screen = styled(Paper)`
  padding: ${(props): string => props.theme.spacing(4)};
  background-color: black;
  border: 1px solid silver;
  border-radius: 15px;
`;

const ScreenInner = styled.div`
  height: 100%;
  background-color: #fafafa;
`;

interface CircleProps {
  backgroundColor: string;
}

const Circle = styled.div<CircleProps>`
  width: 0.667rem;
  height: 0.667rem;
  margin: auto ${(props): string => props.theme.spacing(1)};
  border-radius: 50%;
  background-color: ${(props): string => props.backgroundColor || 'black'};
`;

const Caption = styled(Typography)`
  margin-left: ${(props): string => props.theme.spacing(2)};
`;

function SwipeableTextMobileStepper({ slides }: Props): ReactElement {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number): void => {
    setActiveStep(step);
  };

  return (
    <Screen elevation={10} className="gallery scroll-in">
      <ScreenInner>
        <CarouselHeader square elevation={0} theme={theme}>
          <Circle backgroundColor={'#ED626D'} />
          <Circle backgroundColor={'#FFDE32'} />
          <Circle backgroundColor={'#7DD181'} />
          <Caption variant={'caption'}>{slides[activeStep].caption}</Caption>
        </CarouselHeader>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {slides.map((slide, index) => (
            <div key={slide.caption}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Img
                  fluid={slide.src.childImageSharp.fluid}
                  alt={slide.altText}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <MdKeyboardArrowLeft />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <MdKeyboardArrowRight />
              ) : (
                <MdKeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </ScreenInner>
    </Screen>
  );
}

export default SwipeableTextMobileStepper;
