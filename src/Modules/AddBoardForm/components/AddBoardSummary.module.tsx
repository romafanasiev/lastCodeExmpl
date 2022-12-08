import React, { FC } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Icon,
  Divider,
  Box,
} from '@mui/material';
import { useGetNetworksQuery, useGetSensorsQuery } from 'Api/generated/graphql';
import { palette } from 'Constants';
import { SelectIcon } from 'Assets';
import { AddBoardType } from 'Types';

type Props = {
  formState: AddBoardType;
  projectId: string;
};

export const AddBoardSummary: FC<Props> = ({ formState, projectId }) => {
  const sensorsList = useGetSensorsQuery({
    variables: { projectId },
  });

  const networksList = useGetNetworksQuery({
    variables: { projectId },
  });

  const boardSensors = sensorsList.data?.sensors.filter((sensor) => {
    if (formState.sensorIds.includes(sensor.id)) return sensor;
    return null;
  });

  const boardNetworks = networksList.data?.networks.filter((network) => {
    if (formState.networkIds.includes(network.id)) return network;
    return null;
  });

  const accordeonStyles = {
    maxWidth: palette.maxWidth,
    backgroundColor: 'transparent',
    borderColor: 'red',
    '&.MuiPaper-root.MuiAccordion-root:before': {
      display: 'none',
    },
  };

  const accordeonDetailsStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  };

  return (
    <>
      <Accordion sx={accordeonStyles} elevation={0}>
        <AccordionSummary
          aria-controls="board name"
          id="board-name-header"
          expandIcon={<Icon component={SelectIcon} />}
        >
          <Typography>Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{formState.name}</Typography>
          <Divider />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordeonStyles} elevation={0}>
        <AccordionSummary
          aria-controls="board description"
          id="board-description-header"
          expandIcon={<Icon component={SelectIcon} />}
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{formState.description}</Typography>
          <Divider />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordeonStyles} elevation={0}>
        <AccordionSummary
          aria-controls="sensors"
          id="sensors-header"
          expandIcon={<Icon component={SelectIcon} />}
        >
          <Typography>Sensors</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordeonDetailsStyles}>
          {boardSensors?.map((sensor) => {
            return (
              <Box key={sensor.id}>
                <Typography>{sensor.name}</Typography>
                <Divider />
              </Box>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordeonStyles} elevation={0}>
        <AccordionSummary
          aria-controls="networks"
          id="networks-header"
          expandIcon={<Icon component={SelectIcon} />}
        >
          <Typography>Networks</Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordeonDetailsStyles}>
          {boardNetworks?.map((network) => {
            return (
              <Box key={network.id}>
                <Typography>{network.name}</Typography>
                <Divider />
              </Box>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};
