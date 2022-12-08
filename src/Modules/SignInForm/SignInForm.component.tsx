import React, { FC, useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { signInValidation } from 'Utils';
import { FormTypes } from 'Types';
import { FormField, PassFormField } from 'Components';
import { ROUTES, connectionError, signInError, userNotFound } from 'Constants';
import { login } from 'Api';
import {
  useGetUserInfoLazyQuery,
  useGetUserDataLazyQuery,
} from 'Api/generated/graphql';

const { email, password } = FormTypes;

export const SignInForm: FC = () => {
  const [isRemembered, setIsRemembered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(signInValidation),
  });

  const [getUserId] = useGetUserInfoLazyQuery();
  const [getUserData] = useGetUserDataLazyQuery({
    onCompleted: () => {
      navigate(ROUTES.projects);
    },
  });

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    try {
      const token = await login(formData.email, formData.password);
      if (isRemembered) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }
      const { data } = await getUserId();
      if (data !== undefined) {
        await getUserData({ variables: { id: data.me.id } });
      }
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 401) {
        setErrorMessage(signInError);
      } else if (err.response?.status === 404) {
        setErrorMessage(userNotFound);
      } else {
        setErrorMessage(connectionError);
      }
    }
  };
  return (
    <Stack component="form" gap="30px">
      <Typography variant="h4" color="primary" fontWeight="bold">
        Welcome!
      </Typography>
      {errorMessage !== '' && (
        <Typography color="error">{errorMessage}</Typography>
      )}
      <FormField control={control} name={email} label="Email*" />
      <PassFormField control={control} name={password} label="Password*" />

      <FormControlLabel
        sx={{ alignSelf: 'start' }}
        control={<Checkbox />}
        label="remember me"
        onChange={() => setIsRemembered(!isRemembered)}
      />

      <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>
        Sign In
      </Button>
      <Typography>
        Don’t have an account?{' '}
        <Link to={ROUTES.signUp} component={RouterLink}>
          SIGN UP
        </Link>
      </Typography>
    </Stack>
  );
};
