import React, { FC, ReactNode, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { DropDownIcon } from 'Assets';

interface IDropdown {
  children: ReactNode;
  title: ReactNode;
}

export const Dropdown: FC<IDropdown> = ({ children, title }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setExpanded(false)}>
      <Box>
        <Accordion
          expanded={expanded}
          onChange={() => setExpanded(!expanded)}
          sx={{
            minHeight: '60px',
            '&.MuiPaper-root': {
              borderRadius: '36px',
              zIndex: 1000,
              overflow: 'hidden',
            },
            '& > .MuiButtonBase-root.MuiAccordionSummary-root': {
              minHeight: '60px',
            },
          }}
        >
          <AccordionSummary expandIcon={DropDownIcon}>{title}</AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      </Box>
    </ClickAwayListener>
  );
};
