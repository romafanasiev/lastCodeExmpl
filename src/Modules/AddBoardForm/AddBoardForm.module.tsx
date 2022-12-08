import React, { FC, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stepper } from 'Components';
import {
  useCreateBoardMutation,
  useUpdateBoardConfigMutation,
} from 'Api/generated/graphql';
import { useProjectId } from 'Hooks';
import { ROUTES } from 'Constants';
import { AddBoardType } from 'Types';
import { GET_BOARDS } from 'Api';
import {
  BoardsStepperHeader,
  AddBoardFirstStep,
  AddBoardSecondStep,
  AddBoardThirdStep,
  AddBoardSummary,
} from './components';

const initialState = {
  description: '',
  name: '',
  projectId: '',
  sensorIds: [],
  networkIds: [],
};

const { projects, boards } = ROUTES;

export const AddBoardForm: FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<AddBoardType>(initialState);
  const [activeStep, setActiveStep] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const projectId = useProjectId();

  const [createBoard] = useCreateBoardMutation();

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [updateBoardConfig] = useUpdateBoardConfigMutation();

  const handleCreate = async (): Promise<void> => {
    const { description, name, sensorIds, networkIds } = formState;
    const response = await createBoard({
      variables: { input: { description, name, projectId, sensorIds } },
    });

    if (response.data !== undefined && response.data !== null) {
      await updateBoardConfig({
        variables: {
          input: {
            id: response.data?.createBoard.configuration.id,
            networkIds,
          },
        },
        refetchQueries: [
          {
            query: GET_BOARDS,
            variables: { projectId },
          },
        ],
      });
      navigate(`${projects}/${projectId}${boards}`);
    }
  };

  const steps = [
    { stepName: 'General', disabled: isValid, handleNext, handleBack },
    {
      stepName: 'Add sensors',
      disabled: isValid,
      handleNext,
      handleBack,
    },
    {
      stepName: 'Select network',
      disabled: isValid,
      handleNext,
      handleBack,
    },
    {
      stepName: 'Summary',
      disabled: isValid,
      handleNext: handleCreate,
      handleBack,
    },
  ];

  return (
    <>
      <Stack
        gap="30px"
        flexDirection="row"
        alignItems="center"
        alignContent="center"
      >
        <Typography variant="h4">Add Board</Typography>
        <BoardsStepperHeader activeStep={activeStep} steps={steps} />
      </Stack>
      <Stepper step={activeStep}>
        <AddBoardFirstStep
          setIsValid={setIsValid}
          formState={formState}
          setFormState={setFormState}
          projectId={projectId}
        />
        <AddBoardSecondStep
          setIsValid={setIsValid}
          formState={formState}
          setFormState={setFormState}
          projectId={projectId}
        />
        <AddBoardThirdStep
          setIsValid={setIsValid}
          projectId={projectId}
          setFormState={setFormState}
          formState={formState}
        />
        <AddBoardSummary formState={formState} projectId={projectId} />
      </Stepper>
    </>
  );
};
