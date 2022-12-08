import React, { useState, ReactElement } from 'react';
import { Menu, MenuItem, IconButton, ClickAwayListener } from '@mui/material';
import { DotsMenuIcon } from 'Assets';
import { Modal } from 'Components/Modal';

export const TableMenu = (): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const handleModalClose = (): void => {
    setAnchorEl(null);
  };
  return (
    <ClickAwayListener onClickAway={() => handleClose()}>
      <>
        <IconButton
          id="menu-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {DotsMenuIcon}
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            sx: {
              minWidth: '150px',
            },
            'aria-labelledby': 'menu-button',
          }}
        >
          <MenuItem onClick={handleClose}>Configure </MenuItem>
          <Modal
            buttonText="Delete"
            body="Are you sure you want to delete?"
            title="Are you sure?"
            onClose={handleModalClose}
          />
        </Menu>
      </>
    </ClickAwayListener>
  );
};
