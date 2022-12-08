import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Button, Link, Stack, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { signUpValidation } from 'Utils';
import { FormTypes, IRegistrationData } from 'Types';
import { FormField, PassFormField } from 'Components';
import { ROUTES, connectionError, signUpError } from 'Constants';
import { useCreateUserMutation } from 'Api/generated/graphql';

type Props = {
  handleNextStep: () => void;
  userData: IRegistrationData;
  handleUserData: Dispatch<SetStateAction<IRegistrationData>>;
  setIsSent: Dispatch<SetStateAction<boolean>>;
  setUserId: Dispatch<SetStateAction<string>>;
};

const { email, firstName, lastName, password, confirmPass } = FormTypes;

export const SignUpFirstStep: FC<Props> = ({
  handleNextStep,
  userData,
  handleUserData,
  setIsSent,
  setUserId,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(signUpValidation),
    mode: 'onChange',
  });

  const [createUser] = useCreateUserMutation({
    onCompleted: (data) => {
      setUserId(data.createUser.id);
      handleNextStep();
      setIsSent(true);
    },
    onError: (error) => {
      if (error.networkError !== null) {
        setErrorMessage(connectionError);
      } else {
        setErrorMessage(signUpError);
      }
    },
  });

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    const RegistrationData = {
      email: formData[email],
      firstName: formData[firstName],
      lastName: formData[lastName],
      password: formData[password],
    };
    handleUserData(RegistrationData);
    await createUser({
      variables: {
        input: RegistrationData,
      },
    });
  };

  return (
    <Stack component="form" gap="30px">
      <Typography variant="h4" color="primary" fontWeight="bold">
        Account Registration
      </Typography>
      {errorMessage !== '' && (
        <Typography color="error" variant="caption">
          {errorMessage}
        </Typography>
      )}
      <FormField
        control={control}
        name={email}
        label="Email*"
        defaultValue={userData.email}
      />
      <FormField
        control={control}
        name={firstName}
        label="First Name"
        defaultValue={userData.firstName}
      />
      <FormField
        control={control}
        name={lastName}
        label="Last Name"
        defaultValue={userData.lastName}
      />
      <PassFormField
        control={control}
        name={password}
        label="Password*"
        withChecker={true}
        defaultValue={userData.password}
      />
      <PassFormField
        control={control}
        name={confirmPass}
        label="Confirm Password*"
        defaultValue={userData.password}
      />
      <Button
        variant="contained"
        size="large"
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
      >
        Verify
      </Button>
      <Typography>
        Already have an account?{' '}
        <Link to={ROUTES.signIn} component={RouterLink}>
          SIGN IN
        </Link>
      </Typography>
    </Stack>
  );
};
