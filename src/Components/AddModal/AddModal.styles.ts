import { palette } from 'Constants';

const {
  projectCardHeight,
  projectCardWidth,
  borderColor,
  sidebarBorderRadius,
  hover,
} = palette;

export const projectButtonStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  width: projectCardWidth,
  height: projectCardHeight,
  color: 'text.primary',
  backgroundColor: 'transparent',
  borderRadius: sidebarBorderRadius,
  border: `2px dotted ${borderColor}`,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: hover,
  },
};
