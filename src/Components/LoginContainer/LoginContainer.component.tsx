import React, { FC, ReactNode } from 'react';
import { Box, Stack } from '@mui/material';
import { palette } from 'Constants';

interface ILoginContainer {
  children: ReactNode[] | ReactNode;
}

export const LoginContainer: FC<ILoginContainer> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        sx={{
          padding: '20px',
          maxWidth: '720px',
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <Stack
          gap="30px"
          sx={{
            width: { xs: '280px', sm: palette.maxWidth },
          }}
        >
          {children}
        </Stack>
      </Stack>
    </Box>
  );
};
