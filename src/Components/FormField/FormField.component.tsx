import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'Components/Input';
import { IFormField } from 'Types';

export const FormField: FC<IFormField> = ({
  control,
  name,
  label,
  defaultValue = null,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          onChange={onChange}
          value={value}
          error={!(error == null)}
          helperText={error != null ? error.message : null}
          label={label}
          defaultValue={defaultValue}
        />
      )}
    />
  );
};
