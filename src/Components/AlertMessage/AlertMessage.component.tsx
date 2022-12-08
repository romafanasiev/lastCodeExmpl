import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Alert } from '@mui/material';

interface IAlertMessage {
  children: ReactNode;
}

export const AlertMessage: FC<IAlertMessage> = ({ children }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }
  return (
    <Alert
      severity="success"
      sx={{
        positon: 'absolute',
        bottom: '20px',
        left: '20px',
        mt: '20px',
        '&.MuiAlert-root': { position: 'absolute' },
      }}
    >
      {children}
    </Alert>
  );
};
