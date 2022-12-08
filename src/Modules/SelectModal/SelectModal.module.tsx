import React, { FC, useState } from 'react';
import { Drawer, IconButton, Stack, Typography } from '@mui/material';
import { AddButton, SearchField, SelectTable } from 'Components';
import { palette } from 'Constants';
import { ModalCloseIcon } from 'Assets';
import { FilteredItemsType } from 'Types';
import { AddSensorModal } from 'Modules/AddSensorModal';
import { AddNetworkModal } from 'Modules/AddNetworkModal';

interface ISelectModal {
  itemType: 'Sensor' | 'Network';
  keys: Array<keyof FilteredItemsType>;
  rows: FilteredItemsType[];
  handleAdd: (id: string) => void;
}

export const SelectModal: FC<ISelectModal> = ({
  itemType,
  keys,
  rows,
  handleAdd,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState('');

  let filteredData = rows;

  if (search.length > 0) {
    filteredData = filteredData.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <>
      <AddButton
        buttonText={`Add ${itemType}`}
        handleClick={() => setIsVisible(true)}
        variant="text"
      />
      <Drawer
        anchor={'right'}
        open={isVisible}
        onClose={() => setIsVisible(false)}
        sx={{
          backgroundColor: palette.modalBackground,
          '& .MuiPaper-root': {
            padding: '30px 37px',
            width: 'calc(100% - 90px)',
            minHeight: '100vh',
            borderTopLeftRadius: palette.sidebarBorderRadius,
            borderBottomLeftRadius: palette.sidebarBorderRadius,
          },
        }}
      >
        <Stack gap="30px" alignItems="start">
          <IconButton
            disableRipple
            onClick={() => setIsVisible(false)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '17px',
              color: 'text.primary',
            }}
          >
            {ModalCloseIcon}
            <Typography component="span">{`${itemType}s`}</Typography>
          </IconButton>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Stack flexDirection="row" gap="40px" alignItems="center">
              <Typography variant="h4">{`${itemType}s`}</Typography>
              <SearchField
                handleChange={(e) => setSearch(e.target.value)}
                secondaryStyles={true}
                placeholder="Search"
              />
            </Stack>
            {itemType === 'Sensor' && <AddSensorModal />}
            {itemType === 'Network' && <AddNetworkModal />}
          </Stack>
          <SelectTable
            keys={keys}
            rows={filteredData}
            handleAdd={handleAdd}
            itemType={itemType}
          />
        </Stack>
      </Drawer>
    </>
  );
};
