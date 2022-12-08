import React, { FC, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddModal, FormField, SelectField } from 'Components';
import { FormTypes } from 'Types';
import { addSensorValidation } from 'Utils';
import { SensorType, useCreateSensorMutation } from 'Api/generated/graphql';
import { useProjectId } from 'Hooks';
import { GET_SENSORS } from 'Api';

const { sensorDescription, sensorName, sensorType } = FormTypes;

export const AddSensorModal: FC = () => {
  const selectItems = Object.values(SensorType).map((type) => {
    return { text: type, value: type };
  });
  const projectId = useProjectId();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(addSensorValidation),
    mode: 'onChange',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createSensor] = useCreateSensorMutation();

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    await createSensor({
      variables: {
        input: {
          description: formData[sensorDescription],
          name: formData[sensorName],
          projectId,
          type: formData[sensorType],
        },
      },
      refetchQueries: [
        {
          query: GET_SENSORS,
          variables: { projectId },
        },
      ],
    });
    setIsModalVisible(false);
  };

  return (
    <AddModal
      buttonText="Add new sensor"
      title="Add Sensor"
      isVisible={isModalVisible}
      handleVisibile={setIsModalVisible}
    >
      <Stack component="form" gap="30px">
        <FormField name={sensorName} control={control} label="Name*" />
        <FormField
          name={sensorDescription}
          control={control}
          label="Description*"
        />
        <SelectField control={control} name={sensorType} data={selectItems} />
        <Button
          variant="contained"
          sx={{ margin: '30px 0 0', maxWidth: '102px' }}
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          Create
        </Button>
      </Stack>
    </AddModal>
  );
};
