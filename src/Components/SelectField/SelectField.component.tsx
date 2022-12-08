import React, { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextField, MenuItem, TextFieldProps } from '@mui/material';
import { SelectIcon } from 'Assets';
import { SelectItem } from 'Types/select.types';

interface ISelect {
  data: SelectItem[];
  defaultPosition?: number;
  control: Control<FieldValues, any>;
  name: string;
}

export const SelectField: FC<ISelect & TextFieldProps> = ({
  data,
  name,
  control,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          onChange={onChange}
          select
          fullWidth
          label={label}
          SelectProps={{
            IconComponent: SelectIcon,
            MenuProps: {
              MenuListProps: {
                sx: {
                  maxHeight: '152px',
                },
              },
            },
          }}
          variant="standard"
        >
          {data.map((item, index) => {
            return (
              <MenuItem value={item.value} key={index}>
                {item.text}
              </MenuItem>
            );
          })}
        </TextField>
      )}
    />
  );
};
