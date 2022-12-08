import React, { ChangeEvent, FC } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { SearchIconSmall } from 'Assets';

interface ISearchField {
  placeholder?: string;
  isBig?: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  secondaryStyles?: boolean;
}

const mainStyles = {
  width: '360px',
  height: '36px',
  backgroundColor: '#44454a',
  borderRadius: '36px',
  '& .MuiInputBase-root.MuiOutlinedInput-root': {
    padding: '19px 10px',
    height: '36px',
    '& > fieldset': {
      borderColor: 'transparent',
    },
  },
};

export const SearchField: FC<ISearchField> = ({
  handleChange,
  placeholder = '',
  isBig = false,
  secondaryStyles = false,
}) => {
  const selectedBorderRadius = isBig ? '36px' : '8px';

  const secondaryFieldStyles = {
    width: isBig ? '360px' : '270px',
    height: '36px',
    backgroundColor: isBig ? 'background.paper' : 'background.default',
    borderRadius: selectedBorderRadius,
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
      padding: '19px 10px',
      height: '36px',
      borderRadius: selectedBorderRadius,
      '& > fieldset': {
        borderColor: 'transparent',
      },
    },
  };

  return (
    <TextField
      onChange={handleChange}
      placeholder={placeholder}
      autoComplete="off"
      sx={secondaryStyles ? mainStyles : secondaryFieldStyles}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            disablePointerEvents
            sx={{
              '& > svg': {
                ml: '8px',
              },
            }}
          >
            {SearchIconSmall}
          </InputAdornment>
        ),
      }}
    />
  );
};
