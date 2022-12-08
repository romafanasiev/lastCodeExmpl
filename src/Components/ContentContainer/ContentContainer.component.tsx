import React, { FC, ReactNode } from 'react';
import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { palette, ROUTES } from 'Constants';

interface IContentContainer {
  children: ReactNode[] | ReactNode;
}

export const ContentContainer: FC<IContentContainer> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Stack
      gap="30px"
      padding={
        pathname === ROUTES.projects
          ? `${palette.headerHeight} 60px 0 150px`
          : `${palette.headerHeight} 60px 0`
      }
      sx={{
        position: 'absolute',
        minWidth: '100%',
      }}
    >
      {children}
    </Stack>
  );
};
