import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Box } from '@mui/material';
import { MainTable } from 'Components';
import { useGetNetworksQuery } from 'Api/generated/graphql';
import { AddBoardType, FilteredItemsType } from 'Types';
import { SelectModal } from 'Modules';

type Props = {
  setIsValid: Dispatch<SetStateAction<boolean>>;
  projectId: string;
  formState: AddBoardType;
  setFormState: Dispatch<SetStateAction<AddBoardType>>;
};

export const AddBoardThirdStep: FC<Props> = ({
  setIsValid,
  projectId,
  formState,
  setFormState,
}) => {
  const [networksList, setNetworksList] = useState<FilteredItemsType[]>([]);

  const { loading } = useGetNetworksQuery({
    variables: { projectId },
    onCompleted: (response) => {
      const filteredData = response.networks.map((network) => {
        const {
          name,
          id,
          config: { type },
        } = network;
        return { name, id, type };
      });
      setNetworksList(filteredData);
    },
  });

  const boardNetworks = networksList.filter((network) => {
    if (formState.networkIds.includes(network.id)) return network;
    return null;
  });

  const handleDelete = (id: string): void => {
    const filteredItems = formState.networkIds.filter(
      (networkId) => networkId !== id,
    );
    setFormState({ ...formState, networkIds: filteredItems });
    if (filteredItems.length === 0) {
      setIsValid(false);
    }
  };

  const handleAdd = (id: string): void => {
    if (!formState.networkIds.includes(id)) {
      setFormState({
        ...formState,
        networkIds: [...formState.networkIds, id],
      });
    }
    setIsValid(true);
  };

  return (
    <Box>
      <SelectModal
        itemType="Network"
        keys={['name', 'type']}
        rows={networksList}
        handleAdd={handleAdd}
      />
      <MainTable
        keys={['name', 'type']}
        rows={boardNetworks}
        withDeleteIcon={true}
        handleDelete={handleDelete}
      />
    </Box>
  );
};
