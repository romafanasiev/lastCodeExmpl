import React, { FC, useState } from 'react';
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { palette } from 'Constants';
import { FilteredItemsType } from 'Types';
import { AddButton } from 'Components/AddButton';
import { MainPagination } from 'Components/MainPagination';

interface ISelectTable {
  keys: Array<keyof FilteredItemsType>;
  rows: FilteredItemsType[];
  handleAdd: (id: string) => void;
  itemType: 'Sensor' | 'Network';
}

const selectedStyles = {
  backgroundColor: 'rgba(202, 238, 206, 0.16)',
  border: '1.1px solid rgba(202, 238, 206, 1)',
};

export const SelectTable: FC<ISelectTable> = ({
  keys,
  rows,
  handleAdd,
  itemType,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState('');

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleSelect = (id: string): void => {
    if (selected === id) {
      setSelected('');
    } else {
      setSelected(id);
    }
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {keys.map((key) => {
              return (
                <TableCell key={key}>
                  {`${key.charAt(0).toUpperCase()}${key.slice(1)}`}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.id}
              onClick={() => handleSelect(row.id)}
              sx={selected === row.id ? selectedStyles : null}
            >
              {keys.map((key, index) => {
                if (index === keys.length - 1) {
                  return (
                    <TableCell key={index}>
                      <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {row[key]}
                        <AddButton
                          buttonText={`Add ${itemType}`}
                          handleClick={() => handleAdd(row.id)}
                          visibility={
                            selected === row.id ? 'visible' : 'hidden'
                          }
                        />
                      </Stack>
                    </TableCell>
                  );
                }
                return (
                  <TableCell
                    key={index}
                    sx={{ width: '24%', maxWidth: '294px' }}
                  >
                    {row[key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow
              className="empty"
              style={{
                height: palette.tableRowHeight * emptyRows + 1 * emptyRows,
              }}
            >
              <TableCell colSpan={6} sx={{ borderColor: 'transparent' }} />
            </TableRow>
          )}
        </TableBody>
        {rows.length > 0 && (
          <MainPagination
            headerLength={keys.length + 1}
            rowsLength={rows.length}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </Table>
    </TableContainer>
  );
};
