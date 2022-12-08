import React, { FC } from 'react';
import { Stack, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { FormField } from 'Components';
import { addFreeWifiValidation } from 'Utils';
import { FormTypes } from 'Types';

type FreeWifiFormType = {
  onSubmit: (formData: FieldValues) => Promise<void>;
};

const { networkName, ssid } = FormTypes;

export const FreeWifiForm: FC<FreeWifiFormType> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(addFreeWifiValidation),
    mode: 'onChange',
  });

  return (
    <Stack component="form" gap="30px">
      <FormField name={networkName} control={control} label="Name*" />
      <FormField name={ssid} control={control} label="SSID*" />
      <Button
        variant="contained"
        sx={{ margin: '30px 0 0', maxWidth: '102px' }}
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        Save
      </Button>
    </Stack>
  );
};
