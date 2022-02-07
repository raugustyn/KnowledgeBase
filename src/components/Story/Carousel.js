import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {renderers} from "../StoryItem/Renderers"
import {ISSUE_TYPES} from "../../data";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const items = props.items.filter(item => item.itemType !== ISSUE_TYPES.ADD_LABEL)
  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1) }
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1) }
  const handleStepChange = (step) => { setActiveStep(step) }

  return (
    <Box sx={{ maxWidth: 512, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{items[activeStep].getLastValue('caption')}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? renderers.buildComponent(step, props.params) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={items.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === items.length - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel
