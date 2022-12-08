import React, { FC } from 'react';
import { Stack, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Dropdown, dropdownItemStyles, MainAvatar } from 'Components';
import { BellIcon, SignOutIcon, UserIcon } from 'Assets';
import { ROUTES } from 'Constants';
import { persistor } from 'Api';
import { useGetUserInfoQuery } from 'Api/generated/graphql';

const itemStyles = {
  ...dropdownItemStyles,
  display: 'flex',
  justifyContent: 'start',
  gap: '15px',
  padding: '0 0 0 27%',
};

export const UserDropdown: FC = () => {
  const navigate = useNavigate();
  const { data } = useGetUserInfoQuery();

  const handleSignOut = async (): Promise<void> => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    await persistor.purge();
    navigate(ROUTES.signIn);
  };

  return (
    <Stack flexDirection="row">
      <Box margin="20px 50px 0 50px">{BellIcon}</Box>
      <Dropdown
        title={
          <Stack flexDirection="row" alignItems="center" gap="15px">
            <MainAvatar />
            <Stack flexDirection="row" textAlign="center" gap="4px">
              <Typography component="span">Hello</Typography>
              <Typography component="span" fontWeight="bold">
                {data?.me.firstName}!
              </Typography>
            </Stack>
          </Stack>
        }
      >
        <Stack minWidth="calc(260px - 32px)">
          <Button
            onClick={() => navigate(ROUTES.profile)}
            sx={{ ...itemStyles }}
          >
            {UserIcon}Profile
          </Button>
          <Button onClick={handleSignOut} sx={{ ...itemStyles }}>
            {SignOutIcon} Sign Out
          </Button>
        </Stack>
      </Dropdown>
    </Stack>
  );
};
