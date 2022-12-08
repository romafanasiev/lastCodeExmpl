import React, { FC } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';

interface ICodeFormField {
  register: UseFormRegister<FieldValues>;
  handleChange?: () => void;
  name: string;
}

export const CodeFormField: FC<ICodeFormField> = ({
  register,
  name,
  handleChange = undefined,
}) => {
  return (
    <TextField
      {...register(name)}
      variant="outlined"
      onChange={handleChange}
      placeholder={'-'}
      sx={{ width: { xs: '55px', sm: '75px' } }}
      inputProps={{
        maxLength: 1,
        sx: {
          height: { xs: '35px', sm: '48px' },
          fontWeight: 600,
          fontSize: '24px',
          textAlign: 'center',
        },
      }}
    />
  );
};
