import React, { ChangeEvent, FC, useState } from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { MainTable, SearchField, ContentContainer } from 'Components';
import { useGetSensorsQuery } from 'Api/generated/graphql';
import { useProjectId } from 'Hooks';
import { AddSensorModal } from 'Modules';

export const SensorsPage: FC = () => {
  const projectId = useProjectId();
  const { data, loading } = useGetSensorsQuery({
    variables: { projectId },
  });
  const [search, setSearch] = useState('');
  let sensorsList = data !== undefined ? [...data.sensors] : [];

  if (search.length > 0) {
    sensorsList = sensorsList.filter((sensor) => {
      return sensor.name.toLowerCase().includes(search.toLowerCase());
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
          <Typography variant="h4">Sensors</Typography>
          <SearchField isBig={true} handleChange={handleSearch} />
        </Stack>
        <AddSensorModal />
      </Stack>
      {loading ? (
        <CircularProgress />
      ) : (
        <MainTable rows={sensorsList} keys={['name', 'description', 'type']} />
      )}
    </ContentContainer>
  );
};
