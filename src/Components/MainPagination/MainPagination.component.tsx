import React, { FC } from 'react';
import { TableFooter, TableRow, TablePagination } from '@mui/material';
import { TablePaginationActions } from './TablePaginationActions.components';

interface IPagination {
  headerLength: number;
  rowsLength: number;
  page: number;
  rowsPerPage: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const MainPagination: FC<IPagination> = ({
  headerLength,
  rowsLength,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={headerLength}
          count={rowsLength}
          rowsPerPage={rowsPerPage}
          page={page}
          sx={{ borderColor: 'transparent' }}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};
