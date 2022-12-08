import React, { ReactNode, FC } from 'react';
import { SxProps, TextField, TextFieldProps } from '@mui/material';

interface IInput {
  startAdorment?: ReactNode;
  endAdorment?: ReactNode;
  inputSx?: SxProps;
  maxLength?: number;
}

export const Input: FC<IInput & TextFieldProps> = ({
  sx = null,
  variant = 'standard',
  label = '',
  placeholder = '',
  disabled = false,
  onChange,
  startAdorment = null,
  endAdorment = null,
  size = 'medium',
  type = 'text',
  error,
  helperText,
  inputSx = null,
  maxLength = null,
  defaultValue = '',
}) => {
  return (
    <TextField
      defaultValue={defaultValue}
      fullWidth
      variant={variant}
      sx={sx}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      InputProps={{
        startAdornment: startAdorment,
        endAdornment: endAdorment,
        sx: inputSx,
      }}
      inputProps={{ type, autoComplete: 'no', maxLength }}
      size={size}
      error={error}
      helperText={helperText}
    />
  );
};
