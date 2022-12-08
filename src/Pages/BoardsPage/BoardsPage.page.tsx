import React, { ChangeEvent, FC, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  AddButton,
  MainTable,
  SearchField,
  ContentContainer,
} from 'Components';
import { useProjectId } from 'Hooks';
import { ROUTES } from 'Constants';
import { useGetBoardsQuery } from 'Api/generated/graphql';
import { FilteredItemsType } from 'Types';

const { projects, addBoard } = ROUTES;

export const BoardsPage: FC = () => {
  const [tableData, setTableData] = useState<FilteredItemsType[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const projectId = useProjectId();
  const { loading } = useGetBoardsQuery({
    variables: { projectId },
    onCompleted: (response) => {
      const filteredData = response.boards.map((board) => {
        const {
          name,
          description,
          sensors,
          id,
          configuration: { networks },
        } = board;
        const filteredItems = {
          id,
          name,
          description,
          sensors: sensors.length,
          networks: networks.length,
        };

        return filteredItems;
      });
      setTableData(filteredData);
    },
  });

  let boardsList = tableData;

  if (search.length > 0) {
    boardsList = boardsList.filter((board) => {
      return board.name.toLowerCase().includes(search.toLowerCase());
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
          <Typography variant="h4">Boards</Typography>
          <SearchField isBig={true} handleChange={handleSearch} />
        </Stack>
        <AddButton
          buttonText="add board"
          handleClick={() => navigate(`${projects}/${projectId}${addBoard}`)}
        />
      </Stack>
      <MainTable
        keys={['name', 'description', 'sensors', 'networks']}
        rows={boardsList}
      />
    </ContentContainer>
  );
};
