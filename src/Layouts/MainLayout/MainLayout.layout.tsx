import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Sidebar } from 'Components';
import { ProjectsDropdown, UserDropdown } from 'Modules';

export const MainLayout: FC = () => {
  return (
    <Stack flexDirection="row">
      <Sidebar />
      <Stack sx={{ position: 'relative', flexGrow: 1 }}>
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '30px 60px',
          }}
        >
          <ProjectsDropdown />
          <UserDropdown />
        </Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
};
