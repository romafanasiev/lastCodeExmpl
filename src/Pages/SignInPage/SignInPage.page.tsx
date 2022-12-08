import React, { FC } from 'react';
import { LoginContainer } from 'Components';
import { SignInForm } from 'Modules';

export const SignInPage: FC = () => {
  return (
    <LoginContainer>
      <SignInForm />
    </LoginContainer>
  );
};
