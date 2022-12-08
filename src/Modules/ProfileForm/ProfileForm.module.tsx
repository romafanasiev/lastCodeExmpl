import React, { FC, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, Button } from '@mui/material';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormField, MainAvatar } from 'Components';
import { FormTypes } from 'Types';
import { profileValidation } from 'Utils';
import { palette, ROUTES } from 'Constants';
import {
  useGetUserInfoQuery,
  useUpdateUserMutation,
} from 'Api/generated/graphql';

const { firstName, lastName, photo } = FormTypes;

export const ProfileForm: FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, register, watch } = useForm({
    resolver: yupResolver(profileValidation),
    mode: 'onChange',
  });
  const inputComponent = useRef<HTMLInputElement | null>(null);
  const { name, ref, ...rest } = register(photo);
  const userImage = watch(photo)?.[0];

  const handleClick = (): void => {
    inputComponent.current?.click();
  };
  const [updateUser] = useUpdateUserMutation();

  const { data } = useGetUserInfoQuery();

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    await updateUser({
      variables: {
        input: { firstName: formData[firstName], lastName: formData[lastName] },
      },
    });
    navigate(ROUTES.projects);
  };

  return (
    <Stack component="form" sx={palette.tabsContainerStyles}>
      <Stack flexDirection="row" gap="16px">
        <MainAvatar
          src={userImage !== undefined ? URL.createObjectURL(userImage) : ''}
          sx={{
            height: '48px',
            width: '48px',
            '&:hover': { cursor: 'pointer' },
          }}
          onClick={handleClick}
        />
        <Button
          aria-label="upload avatar"
          component="label"
          onClick={handleClick}
        >
          Change
          <input
            hidden
            type="file"
            accept=".png, .jpg"
            defaultValue=""
            {...rest}
            ref={(e) => {
              ref(e);
              inputComponent.current = e;
            }}
            name={photo}
          />
        </Button>
      </Stack>

      <FormField
        control={control}
        name={firstName}
        label="First Name"
        defaultValue={data?.me.firstName}
      />
      <FormField
        control={control}
        name={lastName}
        label="Last Name"
        defaultValue={data?.me.lastName}
      />
      <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>
        Verify
      </Button>
    </Stack>
  );
};
