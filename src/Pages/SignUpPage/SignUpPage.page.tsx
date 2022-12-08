import React, { FC } from 'react';
import { LoginContainer } from 'Components';
import { SignUpForm } from 'Modules';

export const SignUpPage: FC = () => {
  return (
    <LoginContainer>
      <SignUpForm />
    </LoginContainer>
  );
};
