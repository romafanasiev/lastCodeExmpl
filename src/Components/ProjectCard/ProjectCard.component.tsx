import React, { FC } from 'react';
import { Card, Stack, Typography } from '@mui/material';
import { palette } from 'Constants';
import { MainAvatar } from 'Components/MainAvatar';

interface IProjectCard {
  name: string;
  description: string;
  ownerName: string;
}

const {
  projectCardHeight,
  projectCardWidth,
  borderColor,
  sidebarBorderRadius,
  hover,
} = palette;

export const ProjectCard: FC<IProjectCard> = ({
  name,
  description,
  ownerName,
}) => {
  return (
    <Card
      sx={{
        padding: '30px',
        minWidth: projectCardWidth,
        minHeight: projectCardHeight,
        borderRadius: sidebarBorderRadius,
        border: `2px dotted ${borderColor}`,
        '&:hover': {
          backgroundColor: hover,
        },
      }}
    >
      <Typography variant="h6">{name}</Typography>
      <Typography mt="10px">{description}</Typography>
      <Stack
        mt="32px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <MainAvatar />
        <Typography>{ownerName}</Typography>
      </Stack>
    </Card>
  );
};
