import React, { ChangeEvent, FC, useState } from 'react';
import { MenuItem, Stack, TextField } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { AddModal } from 'Components';
import { SelectIcon } from 'Assets';

import {
  useCreateFreeWifiNetworkMutation,
  useCreateWifiNetworkMutation,
} from 'Api/generated/graphql';
import { FormTypes } from 'Types';
import { useProjectId } from 'Hooks';
import { GET_NETWORKS } from 'Api';
import { FreeWifiForm } from 'Modules/FreeWifiForm';
import { WifiForm } from 'Modules/WifiForm';

const networkTypes = ['Free Wifi network', 'WPA/WPA2-Enterprise'];
const { networkName, ssid, networkPassword } = FormTypes;

export const AddNetworkModal: FC = () => {
  const projectId = useProjectId();
  const [isVisible, setIsVisible] = useState(false);
  const [networkType, setNetworkType] = useState(networkTypes[0]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNetworkType(e.target.value);
  };

  const [createWifi] = useCreateWifiNetworkMutation({
    refetchQueries: [
      {
        query: GET_NETWORKS,
        variables: { projectId },
      },
    ],
  });

  const [createFreeWifi] = useCreateFreeWifiNetworkMutation({
    refetchQueries: [
      {
        query: GET_NETWORKS,
        variables: { projectId },
      },
    ],
  });

  const handleAddFreeWifi = async (formData: FieldValues): Promise<void> => {
    await createFreeWifi({
      variables: {
        input: {
          name: formData[networkName],
          projectId,
          ssid: formData[ssid],
        },
      },
    });
  };

  const handleAddWifi = async (formData: FieldValues): Promise<void> => {
    await createWifi({
      variables: {
        input: {
          name: formData[networkName],
          projectId,
          ssid: formData[ssid],
          password: formData[networkPassword],
        },
      },
    });
  };

  return (
    <AddModal
      buttonText="Add new network"
      title="Add network"
      isVisible={isVisible}
      handleVisibile={() => setIsVisible(!isVisible)}
    >
      <Stack gap="30px">
        <TextField
          value={networkType}
          onChange={handleChange}
          select
          fullWidth
          defaultValue={networkType}
          SelectProps={{
            IconComponent: SelectIcon,
            MenuProps: {
              MenuListProps: {
                sx: {
                  maxHeight: '152px',
                },
              },
            },
          }}
          variant="standard"
        >
          {networkTypes.map((type) => {
            return (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            );
          })}
        </TextField>
        {networkType === networkTypes[0] && (
          <FreeWifiForm onSubmit={handleAddFreeWifi} />
        )}
        {networkType === networkTypes[1] && (
          <WifiForm onSubmit={handleAddWifi} />
        )}
      </Stack>
    </AddModal>
  );
};
