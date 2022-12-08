import React, { FC, ReactNode } from 'react';

interface IStepper {
  children: ReactNode[];
  step: number;
}

export const Stepper: FC<IStepper> = ({ children, step }) => {
  return <>{children[step]}</>;
};
