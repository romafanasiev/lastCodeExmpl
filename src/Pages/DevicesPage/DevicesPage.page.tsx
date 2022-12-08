import React, { ChangeEvent, FC, useState } from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { MainTable, SearchField, ContentContainer } from 'Components';
import { useGetDevicesQuery } from 'Api/generated/graphql';
import { useProjectId } from 'Hooks';
import { DevicesPageModal } from 'Modules';

export const DevicesPage: FC = () => {
  const projectId = useProjectId();
  const { data, loading } = useGetDevicesQuery({
    variables: { projectId },
  });
  const [search, setSearch] = useState('');
  let devicesList = data !== undefined ? [...data.devices] : [];

  if (search.length > 0) {
    devicesList = devicesList.filter((device) => {
      return device.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <ContentContainer>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack gap="30px" flexDirection="row" alignItems="center">
          <Typography variant="h4">Devices</Typography>
          <SearchField isBig={true} handleChange={handleSearch} />
        </Stack>
        <DevicesPageModal />
      </Stack>
      {loading ? (
        <CircularProgress />
      ) : (
        <MainTable rows={devicesList} keys={['name', 'description']} />
      )}
    </ContentContainer>
  );
};
