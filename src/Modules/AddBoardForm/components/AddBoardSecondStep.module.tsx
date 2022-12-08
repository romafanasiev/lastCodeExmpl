import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Box } from '@mui/material';
import { useGetSensorsQuery } from 'Api/generated/graphql';
import { MainTable } from 'Components';
import { AddBoardType } from 'Types';
import { SelectModal } from 'Modules';

type Props = {
  setIsValid: Dispatch<SetStateAction<boolean>>;
  formState: AddBoardType;
  setFormState: Dispatch<SetStateAction<AddBoardType>>;
  projectId: string;
};

export const AddBoardSecondStep: FC<Props> = ({
  setIsValid,
  formState,
  setFormState,
  projectId,
}) => {
  const { data } = useGetSensorsQuery({
    variables: { projectId },
  });

  const sensorsList = data !== undefined ? [...data.sensors] : [];

  const boardSensors = data?.sensors.filter((sensor) => {
    if (formState.sensorIds.includes(sensor.id)) return sensor;
    return null;
  });

  const handleDelete = (id: string): void => {
    const filteredItems = formState.sensorIds.filter(
      (sensorId) => sensorId !== id,
    );
    setFormState({ ...formState, sensorIds: filteredItems });
    if (filteredItems.length === 0) {
      setIsValid(false);
    }
  };

  const handleAdd = (id: string): void => {
    if (!formState.sensorIds.includes(id)) {
      setFormState({ ...formState, sensorIds: [...formState.sensorIds, id] });
    }
    setIsValid(true);
  };

  useEffect(() => {
    if (formState.sensorIds.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formState.sensorIds]);

  return (
    <Box>
      <SelectModal
        itemType="Sensor"
        keys={['name', 'description', 'type']}
        rows={sensorsList}
        handleAdd={handleAdd}
      />
      <MainTable
        keys={['name', 'description', 'type']}
        rows={boardSensors !== undefined ? boardSensors : []}
        withDeleteIcon={true}
        handleDelete={handleDelete}
      />
    </Box>
  );
};
