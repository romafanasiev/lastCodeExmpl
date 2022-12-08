import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { palette } from 'Constants';
import { AlertMessage } from 'Components';
import { useGetUserCodeLazyQuery } from 'Api/generated/graphql';
import { Timer } from './Timer.module';

type Props = {
  handlePrevStep: () => void;
  setIsSent: Dispatch<SetStateAction<boolean>>;
  isSent: boolean;
  userId: string;
};

export const Resend: FC<Props> = ({
  handlePrevStep,
  isSent,
  userId,
  setIsSent,
}) => {
  const [disableTime, setDisableTime] = useState(
    localStorage.getItem('disabled'),
  );
  const isBefore = dayjs().isBefore(disableTime);
  const [resendCode] = useGetUserCodeLazyQuery();

  const updateTime = (newTime: string): void => {
    setDisableTime(newTime);
    setIsSent(true);
    localStorage.setItem('disabled', newTime);
  };

  const handleClick = async (): Promise<void> => {
    const newTime = `${dayjs().minute(dayjs().minute() + 1)}`;
    updateTime(newTime);
    await resendCode({ variables: { id: userId } });
  };

  return (
    <Stack flexDirection="row">
      <Button
        onClick={handleClick}
        sx={{
          fontWeight: palette.linksFontWeight,
          padding: 0,
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
          },
        }}
        disabled={isBefore}
      >
        Resend Code
      </Button>
      <Timer
        disableTime={disableTime}
        isBefore={isBefore}
        updateTime={updateTime}
        setIsSent={setIsSent}
      />
      <Typography component="span">&nbsp;or&nbsp;</Typography>
      <Button
        onClick={() => handlePrevStep()}
        sx={{
          fontWeight: palette.linksFontWeight,
          padding: 0,
        }}
      >
        Change email address
      </Button>
      {isSent && (
        <AlertMessage>Confirmation code was sent to your Email.</AlertMessage>
      )}
    </Stack>
  );
};
