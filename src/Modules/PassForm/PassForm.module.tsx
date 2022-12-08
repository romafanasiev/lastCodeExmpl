import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { PassFormField } from 'Components';
import { FormTypes } from 'Types';
import { changePassValidation } from 'Utils';
import { palette } from 'Constants';

const { password, confirmPass } = FormTypes;

export const PassForm: FC = () => {
  const {
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(changePassValidation),
    mode: 'onChange',
  });

  return (
    <Stack component="form" sx={palette.tabsContainerStyles}>
      <PassFormField
        control={control}
        name={password}
        label="Change Password*"
        withChecker={true}
      />
      <PassFormField
        control={control}
        name={confirmPass}
        label="Confirm Password*"
      />
      <Button variant="contained" size="large" disabled={!isValid}>
        Verify
      </Button>
    </Stack>
  );
};
