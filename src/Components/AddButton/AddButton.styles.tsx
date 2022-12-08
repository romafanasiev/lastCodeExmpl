import { palette } from 'Constants';

const { buttonSecondary, black } = palette;

export const addButtonContainedStyles = {
  height: '36px',
  gap: '12px',
  minWidth: 'max-content',
  backgroundColor: buttonSecondary,
  '&:hover': { backgroundColor: buttonSecondary },
  '& > svg': {
    fill: black,
  },
};

export const addButtonTextStyles = {
  height: '36px',
  gap: '12px',
  maxWidth: 'fit-content',
  color: buttonSecondary,
  '& > svg': {
    fill: buttonSecondary,
  },
};
