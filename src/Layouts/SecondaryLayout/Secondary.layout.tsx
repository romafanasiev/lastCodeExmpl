import React, { FC } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Stack, Link } from '@mui/material';
import { ContentContainer } from 'Components';
import { ROUTES } from 'Constants';
import { UserDropdown } from 'Modules';
import { LogoIcon } from 'Assets';

export const SecondaryLayout: FC = () => {
  return (
    <Stack sx={{ position: 'relative', flexGrow: 1 }}>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '30px 60px 30px 30px',
          position: 'relative',
        }}
      >
        <Link sx={{ zIndex: 10 }} to={ROUTES.projects} component={RouterLink}>
          {LogoIcon}
        </Link>
        <UserDropdown />
      </Stack>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Stack>
  );
};
