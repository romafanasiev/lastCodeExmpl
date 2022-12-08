import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { palette } from 'Constants';
import { SettingsSmallIcon, DocumentIcon } from 'Assets';
import { MainTabs, ContentContainer } from 'Components';
import { SafeArea } from 'Modules';

export const SettingsPage: FC = () => {
  return (
    <ContentContainer>
      <Typography variant="h4" mb={palette.contentHeaderMB}>
        Settings
      </Typography>
      <MainTabs
        tabsName="settings"
        panels={[
          <Typography key="general settings">General settings</Typography>,
          <SafeArea key="safeArea" />,
        ]}
        tabs={[
          { item: <>{SettingsSmallIcon} general</> },
          { item: <>{DocumentIcon} safe area</>, class: 'area' },
        ]}
      />
    </ContentContainer>
  );
};
