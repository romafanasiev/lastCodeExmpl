import React, { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Box, IconButton } from '@mui/material';
import { Input } from 'Components/Input';
import { IFormField } from 'Types';
import { HidePassIcon, ShowPassIcon } from 'Assets';
import { TypesChecker } from './TypesChecker.component';

export const PassFormField: FC<IFormField & { withChecker?: boolean }> = ({
  control,
  name,
  label,
  defaultValue = '',
  withChecker = false,
}) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box>
          <Input
            defaultValue={defaultValue}
            onChange={onChange}
            value={value}
            error={!(error == null)}
            helperText={error != null ? error.message : null}
            type={visibility ? 'text' : 'password'}
            label={label}
            endAdorment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setVisibility(!visibility)}
                sx={{ width: '24px', height: '24px' }}
              >
                {value.length > 0 && (visibility ? HidePassIcon : ShowPassIcon)}
              </IconButton>
            }
          />
          {withChecker && <TypesChecker value={value} />}
        </Box>
      )}
    />
  );
};
