import React, { FC } from 'react';
import { Stack, Button, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { palette, ROUTES } from 'Constants';
import { useDeleteProjectMutation } from 'Api/generated/graphql';
import { useProjectId } from 'Hooks';
import { GET_PROJECTS } from 'Api';
import { safeAreaStyles } from './SafeArea.styles';

const { itemContainerStyles, itemStyles, buttonStyles } = safeAreaStyles;

export const SafeArea: FC = () => {
  const navigate = useNavigate();
  const id = useProjectId();
  const [deleteProject] = useDeleteProjectMutation({
    variables: { id },
    refetchQueries: [
      {
        query: GET_PROJECTS,
        variables: { projectId: id },
      },
    ],
  });

  const handelDelete = async (): Promise<void> => {
    await deleteProject();
    navigate(ROUTES.projects);
  };

  return (
    <Stack component="form" sx={palette.tabsContainerStyles}>
      <Stack sx={itemContainerStyles}>
        <Stack sx={itemStyles}>
          <Typography>Tranfer ownership</Typography>
          <Typography variant="body2">
            Transfer this project to another user.
          </Typography>
        </Stack>
        <Button variant="contained" color="error" sx={buttonStyles}>
          Transfer
        </Button>
      </Stack>
      <Divider />
      <Stack sx={itemContainerStyles}>
        <Stack sx={itemStyles}>
          <Typography>Delete this project</Typography>
          <Typography variant="body2">
            Once you delete a project, there is no going back. Please be
            certain.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="error"
          sx={buttonStyles}
          onClick={handelDelete}
        >
          Delete this project
        </Button>
      </Stack>
      <Divider />
    </Stack>
  );
};
