import React, { ReactElement } from 'react';
import Img from 'gatsby-image';

// Material-UI
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';

// SwipeableViews
import SwipeableViews from 'react-swipeable-views';

//Icons
import { MdKeyboardArrowRight } from '@react-icons/all-files/md/MdKeyboardArrowRight';
import { MdKeyboardArrowLeft } from '@react-icons/all-files/md/MdKeyboardArrowLeft';

// Carousel
import {
  Props,
  Caption,
  CarouselHeader,
  Circle,
  Screen,
  ScreenInner,
} from './Carousel';

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
    <Screen elevation={10}>
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
            <div
              key={slide.caption}
              style={{ maxHeight: '422px', overflowY: 'auto' }}
            >
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
