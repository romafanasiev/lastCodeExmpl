import React, { FC, useState } from 'react';
import { Stepper } from 'Components';
import { IRegistrationData } from 'Types';
import { SignUpFirstStep, SignUpSecondStep } from './components';

const initialState: IRegistrationData = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
};

export const SignUpForm: FC = () => {
  const [userData, setUserData] = useState(initialState);
  const [userId, setUserId] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [step, setStep] = useState(0);

  const handleNextStep = (): void => {
    setStep(step + 1);
  };

  const handlePrevStep = (): void => {
    setStep(step - 1);
  };

  return (
    <Stepper step={step}>
      <SignUpFirstStep
        handleNextStep={handleNextStep}
        userData={userData}
        handleUserData={setUserData}
        setIsSent={setMessageSent}
        setUserId={setUserId}
      />
      <SignUpSecondStep
        handlePrevStep={handlePrevStep}
        userId={userId}
        isSent={messageSent}
        setIsSent={setMessageSent}
        userData={userData}
      />
    </Stepper>
  );
};
