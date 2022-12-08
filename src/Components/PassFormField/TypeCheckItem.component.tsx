import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface ICheckItem {
  check: boolean;
  text: string;
}

export const TypeCheckItem: FC<ICheckItem> = ({ check, text }) => {
  return (
    <Typography
      variant="caption"
      color={check ? 'primary' : 'error'}
      fontWeight="medium"
    >
      {text}
    </Typography>
  );
};
