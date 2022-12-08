import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { palette } from 'Constants';
import { UserProfileIcon, LockIcon } from 'Assets';
import { MainTabs } from 'Components';
import { PassForm, ProfileForm } from 'Modules';

export const ProfilePage: FC = () => {
  return (
    <>
      <Typography variant="h4" mb={palette.contentHeaderMB}>
        Profile
      </Typography>
      <MainTabs
        tabsName="profile"
        panels={[
          <ProfileForm key="profileForm" />,
          <PassForm key="passForm" />,
        ]}
        tabs={[
          { item: <>{UserProfileIcon} Profile</> },
          { item: <>{LockIcon} Password</> },
        ]}
      />
    </>
  );
};
