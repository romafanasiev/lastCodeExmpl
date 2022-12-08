import React, { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { PlusIcon } from 'Assets';
import {
  addButtonContainedStyles,
  addButtonTextStyles,
} from './AddButton.styles';

interface IAddButton {
  buttonText: string;
  handleClick:
    | (() => void)
    | ((event: React.KeyboardEvent | React.MouseEvent) => void);
  visibility?: 'visible' | 'hidden';
}

export const AddButton: FC<IAddButton & ButtonProps> = ({
  buttonText,
  handleClick,
  variant = 'contained',
  visibility = 'visible',
}) => {
  const styles =
    variant === 'contained' ? addButtonContainedStyles : addButtonTextStyles;
  return (
    <Button
      variant={variant}
      sx={{ ...styles, visibility }}
      onClick={handleClick}
    >
      <>
        {PlusIcon}
        {buttonText}
      </>
    </Button>
  );
};
