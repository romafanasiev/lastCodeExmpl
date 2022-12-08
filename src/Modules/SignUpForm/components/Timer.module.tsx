/* eslint-disable consistent-return */
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';

type Props = {
  disableTime: string | null;
  isBefore: boolean;
  updateTime: (newTime: string) => void;
  setIsSent: Dispatch<SetStateAction<boolean>>;
};

export const Timer: FC<Props> = ({
  disableTime,
  isBefore,
  updateTime,
  setIsSent,
}) => {
  const [seconds, setSeconds] = useState(0);

  function getTime(): void {
    const secondsLeft = Math.abs(dayjs().diff(disableTime, 'seconds')) % 60;
    setSeconds(secondsLeft);
    if (secondsLeft === 0) {
      updateTime(dayjs().toString());
      setIsSent(false);
    }
  }

  useEffect(() => {
    if (isBefore) {
      const interval = setInterval(() => getTime(), 1000);
      return () => clearInterval(interval);
    }
  }, [isBefore]);

  return isBefore ? (
    <Typography component="span">{`(${seconds}s)`}</Typography>
  ) : null;
};
