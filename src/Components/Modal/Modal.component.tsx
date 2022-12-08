import React, { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { palette } from 'Constants';
import { ModalCloseIcon } from 'Assets';

interface IModal {
  title: string;
  body: string;
  buttonText: string;
  onClose?: () => void;
}

export const Modal: FC<IModal> = ({
  title,
  body,
  buttonText,
  onClose = undefined,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleAction = (): void => {
    if (onClose !== undefined) {
      onClose();
    }
    setOpen(false);
  };

  return (
    <Box>
      <Button
        onClick={handleClickOpen}
        sx={{
          padding: '0 0 0 16px',
          width: '100%',
          height: '36px',
          textTransform: 'none',
          justifyContent: 'start',
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <Typography>{buttonText}</Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiPaper-root': {
            alignItems: 'start',
            gap: '60px',
            padding: '30px 65px',
            width: '530px',
            borderRadius: palette.sidebarBorderRadius,
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" variant="h4" sx={{ padding: '0' }}>
          {title}
        </DialogTitle>
        <DialogContent sx={{ position: 'relative', padding: '0' }}>
          <DialogContentText id="alert-dialog-description" color="text.primary">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: '0' }}>
          <Button variant="contained" onClick={handleAction}>
            {buttonText}
          </Button>
          <IconButton
            sx={{ position: 'absolute', top: '32px', right: '55px' }}
            onClick={handleClose}
          >
            {ModalCloseIcon}
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
