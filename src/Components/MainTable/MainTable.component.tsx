import React, { FC, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  IconButton,
  Icon,
} from '@mui/material';
import { palette } from 'Constants';
import { FilteredItemsType } from 'Types';
import { NetworkSettingsIcon, TrashCanIcon, WirelessNetworkIcon } from 'Assets';
import { MainPagination } from 'Components/MainPagination';
import { TableMenu } from './components/TableMenu.component';

interface IMainTable {
  keys: Array<keyof FilteredItemsType>;
  rows: FilteredItemsType[];
  withDeleteIcon?: boolean;
  handleDelete?: (id: string) => void;
  isNetworksTable?: boolean;
}

export const MainTable: FC<IMainTable> = ({
  keys,
  rows,
  withDeleteIcon = false,
  handleDelete = () => {},
  isNetworksTable = false,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
      <Table sx={{ minWidth: 500 }} aria-label="boards table">
        <TableHead>
          <TableRow>
            {isNetworksTable && (
              <TableCell component="th" sx={{ width: '56px' }} />
            )}
            {keys.map((key) => {
              // if (key === 'networkType') {
              //   return <TableCell key={key}>Network</TableCell>;
              // }
              return (
                <TableCell key={key}>
                  {`${key.charAt(0).toUpperCase()}${key.slice(1)}`}
                </TableCell>
              );
            })}
            <TableCell component="th" />
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              {/* {isNetworksTable && (
                <TableCell sx={{ width: '56px' }}>
                  <IconButton>{NetworkSettingsIcon}</IconButton>
                </TableCell>
              )} */}
              {keys.map((key, index) => {
                // if (key === 'networkType') {
                //   return (
                //     <TableCell key={index}>
                //       <Icon>{WirelessNetworkIcon}</Icon>
                //     </TableCell>
                //   );
                // }
                return (
                  <TableCell
                    key={index}
                    sx={{ width: '24%', maxWidth: '294px' }}
                  >
                    {row[key]}
                  </TableCell>
                );
              })}
              {withDeleteIcon ? (
                <TableCell sx={{ maxWidth: '56px', textAlign: 'end' }}>
                  <IconButton onClick={() => handleDelete(row.id)}>
                    {TrashCanIcon}
                  </IconButton>
                </TableCell>
              ) : (
                <TableCell sx={{ maxWidth: '56px', textAlign: 'end' }}>
                  <TableMenu />
                </TableCell>
              )}
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
            // headerLength={isNetworksTable ? keys.length + 2 : keys.length + 1}
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
