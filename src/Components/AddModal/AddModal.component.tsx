import React, { Dispatch, FC, ReactNode } from 'react';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { palette } from 'Constants';
import { AddProjectIcon, ModalCloseIcon } from 'Assets';
import { AddButton } from 'Components/AddButton';
import { projectButtonStyles } from './AddModal.styles';

interface IAddModal {
  buttonText: string;
  title: string;
  children: ReactNode;
  isProjectPage?: boolean;
  isVisible: boolean;
  handleVisibile: Dispatch<React.SetStateAction<boolean>>;
  buttonVariant?: 'text' | 'contained';
}

export const AddModal: FC<IAddModal> = ({
  buttonText,
  title,
  children,
  isProjectPage = false,
  isVisible,
  handleVisibile,
  buttonVariant = 'contained',
}) => {
  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent,
  ): void => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    handleVisibile(true);
  };

  return (
    <Box>
      {isProjectPage ? (
        <Button
          variant="contained"
          sx={projectButtonStyles}
          onClick={toggleDrawer}
        >
          <>
            {AddProjectIcon}
            <Typography variant="h6" component="span">
              {buttonText}
            </Typography>
          </>
        </Button>
      ) : (
        <AddButton
          buttonText={buttonText}
          handleClick={toggleDrawer}
          variant={buttonVariant}
        />
      )}

      <Drawer
        anchor={'right'}
        open={isVisible}
        onClose={() => handleVisibile(false)}
        sx={{
          backgroundColor: palette.modalBackground,
          '& .MuiPaper-root': {
            padding: '30px 37px',
            width: '530px',
            minHeight: '100vh',
            borderTopLeftRadius: palette.sidebarBorderRadius,
            borderBottomLeftRadius: palette.sidebarBorderRadius,
          },
        }}
      >
        <Box>
          <IconButton
            disableRipple
            onClick={() => handleVisibile(false)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '17px',
              color: 'text.primary',
            }}
          >
            {ModalCloseIcon}
            <Typography component="span">{title}</Typography>
          </IconButton>
          <Box mt="120px" padding="0 28px">
            <Typography variant="h4" margin="0 0 60px">
              {title}
            </Typography>
            {children}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
