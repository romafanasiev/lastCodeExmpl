import React, { FC } from 'react';
import { Stack } from '@mui/material';
import { ContentContainer } from 'Components';

export const ManagmentPage: FC = () => {
  return (
    <ContentContainer>
      <Stack
        flexDirection="row"
        gap="30px"
        flexWrap="wrap"
        sx={{
          justifyContent: { xs: 'center', lg: 'start' },
        }}
      ></Stack>
    </ContentContainer>
  );
};
