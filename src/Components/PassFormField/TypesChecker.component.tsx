import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { TypeCheckItem } from './TypeCheckItem.component';

interface ITypesChecker {
  value: string;
}

export const TypesChecker: FC<ITypesChecker> = ({ value }) => {
  const valueLength = value.length >= 8;
  const upperCaseCheck = /(?=.*[A-Z]){1}/.test(value);
  const lowerCaseCheck = /(?=.*[a-z]){1}/.test(value);
  const digitCheck = /(?=.*\d)/.test(value);
  const specialCharChek = /(?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}/.test(value);

  return (
    <Box>
      {value === '' ? (
        <Typography variant="caption" color="text.secondary">
          8+ characters, Uppercase Letters, Lowercase Letter, <br /> Speсial
          character, Number
        </Typography>
      ) : (
        <>
          <Box>
            <TypeCheckItem check={valueLength} text="8+ characters, " />
            <TypeCheckItem check={upperCaseCheck} text="Uppercase Letter, " />
            <TypeCheckItem check={lowerCaseCheck} text="Lowercase Letter, " />
          </Box>
          <TypeCheckItem check={specialCharChek} text="Speсial character, " />
          <TypeCheckItem check={digitCheck} text="Number" />
        </>
      )}
    </Box>
  );
};
