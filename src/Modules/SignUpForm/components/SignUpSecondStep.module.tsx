import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { confirmCodeValidation } from 'Utils';
import { FormTypes, IRegistrationData } from 'Types';
import { CodeFormField } from 'Components';
import { useVerifyUserMutation } from 'Api/generated/graphql';
import { ROUTES, codeError, connectionError } from 'Constants';
import { login } from 'Api';
import { Resend } from './Resend.module';

type Props = {
  handlePrevStep: () => void;
  setIsSent: Dispatch<SetStateAction<boolean>>;
  userId: string;
  userData: IRegistrationData;
  isSent: boolean;
};

const { confirm1, confirm2, confirm3, confirm4 } = FormTypes;

export const SignUpSecondStep: FC<Props> = ({
  handlePrevStep,
  setIsSent,
  userId,
  userData,
  isSent,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    setFocus,
    getValues,
  } = useForm({
    resolver: yupResolver(confirmCodeValidation),
    mode: 'onChange',
  });

  useEffect(() => {
    setFocus(confirm1);
  }, []);

  const [verifyUser] = useVerifyUserMutation({
    onCompleted: async () => {
      const token = await login(userData.email, userData.password);
      sessionStorage.setItem('token', token);
      navigate(ROUTES.projects);
    },
    onError: (error) => {
      if (error.networkError !== null) {
        setErrorMessage(connectionError);
      } else {
        setErrorMessage(codeError);
      }
    },
  });

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    const formCode = Object.values(formData).join('');
    await verifyUser({
      variables: { input: { code: Number(formCode), userId } },
    });
  };

  const handleChange = (prevField: FormTypes, nextField: FormTypes): void => {
    if (getValues(prevField) === '') setFocus(nextField);
  };

  return (
    <>
      <Stack component="form" gap="30px">
        <Typography variant="h4" color="primary" fontWeight="bold">
          Account Verification
        </Typography>
        {errorMessage === '' && (
          <Typography variant="caption" color="primary">
            Enter the code before it expires
          </Typography>
        )}
        {errorMessage !== '' && (
          <Typography color="error" variant="caption">
            {errorMessage}
          </Typography>
        )}
        <Stack flexDirection="row" justifyContent="space-between">
          <CodeFormField
            register={register}
            name={confirm1}
            handleChange={() => handleChange(confirm1, confirm2)}
          />
          <CodeFormField
            register={register}
            name={confirm2}
            handleChange={() => handleChange(confirm2, confirm3)}
          />
          <CodeFormField
            register={register}
            name={confirm3}
            handleChange={() => handleChange(confirm3, confirm4)}
          />
          <CodeFormField register={register} name={confirm4} />
        </Stack>

        <Button
          variant="contained"
          size="large"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Verify
        </Button>
        <Stack gap="15px">
          <Typography>Haven’t received the email? </Typography>
          <Resend
            handlePrevStep={handlePrevStep}
            isSent={isSent}
            setIsSent={setIsSent}
            userId={userId}
          />
        </Stack>
      </Stack>
    </>
  );
};
