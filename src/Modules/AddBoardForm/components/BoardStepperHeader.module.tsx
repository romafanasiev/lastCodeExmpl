import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

type StepType = {
  stepName: string;
  disabled: boolean;
  handleNext: (() => void) | (() => Promise<void>);
  handleBack: () => void;
};

type Props = {
  activeStep: number;
  steps: StepType[];
};

export const BoardsStepperHeader: FC<Props> = ({ steps, activeStep }) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      flexGrow="1"
      alignContent="center"
      alignItems="center"
    >
      <Stepper activeStep={activeStep} sx={{ minWidth: '600px' }}>
        {steps.map((step) => {
          return (
            <Step key={step.stepName}>
              <StepLabel>{step.stepName}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Stack flexDirection="row">
        <Button
          variant="text"
          disabled={activeStep === 0}
          onClick={steps[activeStep].handleBack}
        >
          Back
        </Button>
        <Box />
        <Button
          onClick={steps[activeStep].handleNext}
          variant="contained"
          disabled={!steps[activeStep].disabled}
        >
          {activeStep === steps.length - 1 ? 'Create' : 'Continue'}
        </Button>
      </Stack>
    </Stack>
  );
};
