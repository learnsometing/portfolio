import React, { ReactElement } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Material-UI
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// SwipeableViews
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

//Icons
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// Interfaces
import ChildImageSharp from '../../shared/ChildImageSharp';

interface Slide {
  src: ChildImageSharp;
  altText: string;
  caption?: string;
}

interface Props {
  slides: Slide[];
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarouselRoot = styled(Grid)`
  /* queries to keep the carousel on screen as aspect ratio increases */
  @media screen and (min-aspect-ratio: 17/9) and (max-aspect-ratio: 18/9) {
    max-width: 80%;
  }
  @media screen and (min-aspect-ratio: 18/9) and (max-aspect-ratio: 19/9) {
    max-width: 75%;
  }
  @media screen and (min-aspect-ratio: 19/9) and (max-aspect-ratio: 20/9) {
    max-width: 72.5%;
  }
  @media screen and (min-aspect-ratio: 20/9) and (max-aspect-ratio: 21/9) {
    max-width: 70%;
  }
  @media screen and (min-aspect-ratio: 21/9) and (max-aspect-ratio: 22/9) {
    max-width: 67.5%;
  }
`;

const CarouselHeader = styled(Paper)`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: ${({ theme }): string => theme.spacing(4)}px;
  background-color: ${({ theme }): string => theme.palette.background.default};
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
    <Grid container justify={'center'}>
      <CarouselRoot item xs={12} sm={12} md={12} lg={12} xl={12}>
        <CarouselHeader square elevation={0} theme={theme}>
          <Typography>{slides[activeStep].caption}</Typography>
        </CarouselHeader>
        <AutoPlaySwipeableViews
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
        </AutoPlaySwipeableViews>
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
      </CarouselRoot>
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
