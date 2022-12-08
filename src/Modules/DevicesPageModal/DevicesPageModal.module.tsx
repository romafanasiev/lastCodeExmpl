import React, { FC, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddModal, FormField, SelectField } from 'Components';
import { FormTypes } from 'Types';
import { addDeviceValidation } from 'Utils';
import {
  useCreateDeviceMutation,
  useGetBoardsQuery,
} from 'Api/generated/graphql';
import { useProjectId } from 'Hooks';
import { GET_DEVICES } from 'Api';
import { SelectItem } from 'Types/select.types';

const { boardId, deviceDescription, deviceName, mac } = FormTypes;

export const DevicesPageModal: FC = () => {
  const [selectItems, setSelectItems] = useState<SelectItem[]>([]);
  const projectId = useProjectId();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(addDeviceValidation),
    mode: 'onChange',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createDevice] = useCreateDeviceMutation();
  const { data } = useGetBoardsQuery({
    variables: { projectId },
    onCompleted: (res) => {
      const filteredItems = res.boards.map((board) => {
        return { value: board.id, text: board.name };
      });
      setSelectItems(filteredItems);
    },
  });

  const onSubmit = async (formData: FieldValues): Promise<void> => {
    await createDevice({
      variables: {
        input: {
          boardId: formData[boardId],
          description: formData[deviceDescription],
          name: formData[deviceName],
          mac: formData[mac],
        },
      },
      refetchQueries: [
        {
          query: GET_DEVICES,
          variables: { projectId },
        },
      ],
    });
    setIsModalVisible(false);
  };

  return (
    <AddModal
      buttonText="Add device"
      title="Add device"
      isVisible={isModalVisible}
      handleVisibile={setIsModalVisible}
    >
      <Stack component="form" gap="30px">
        <FormField name={deviceName} control={control} label="Name*" />
        <FormField
          name={deviceDescription}
          control={control}
          label="Description*"
        />
        <FormField name={mac} control={control} label="Mac*" />
        <SelectField control={control} name={boardId} data={selectItems} />
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
