import { createTheme } from '@mui/material';
import { palette } from 'Constants';

const {
  black,
  white,
  background,
  backgroundSecondary,
  primary,
  secondary,
  text,
  textSecondary,
  error,
  maxWidth,
  disabled,
  buttonDisabled,
  buttonTextDisabled,
  codeInputColor,
  icons,
  tableRowHeight,
  hover,
} = palette;

export const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black,
      white,
    },
    primary: {
      main: primary,
      contrastText: black,
    },
    secondary: {
      main: secondary,
      contrastText: black,
    },
    error: {
      main: error,
    },
    text: {
      primary: text,
      secondary: textSecondary,
    },
    background: {
      paper: backgroundSecondary,
      default: background,
    },
    action: {
      hover,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          maxWidth,
          '& > input': {
            padding: 0,
          },
          '&.MuiInput-root:before': {
            borderColor: disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          height: '32px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: codeInputColor,
          color: codeInputColor,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: disabled,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontWeight: 800,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          maxWidth,
          '&.Mui-disabled': {
            backgroundColor: buttonDisabled,
            color: buttonTextDisabled,
            '&.MuiButton-text': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: icons,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: backgroundSecondary,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          height: `${tableRowHeight}px`,
          borderColor: buttonDisabled,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          '& > p:first-of-type': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          display: 'flex',

          '&.MuiButtonBase-root.MuiTab-root': {
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            color: 'rgba(255, 255, 255, 0.7)',
            borderBottom: '2px solid transparent',
            '& > svg': {
              fill: 'rgba(255, 255, 255, 0.7)',
            },
            '&.Mui-selected': {
              color: primary,
              borderColor: primary,
              '& > svg': {
                fill: primary,
              },
            },
            '&.Mui-selected.area': {
              color: error,
              borderColor: error,
              '& > svg': {
                fill: error,
              },
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '24px',
          backgroundColor: '#323435',
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& > .MuiTableRow-root': {
            '&:hover': {
              cursor: 'pointer',
              backgroundColor: hover,
            },
          },
          '& > .MuiTableRow-root.empty': {
            '&:hover': {
              cursor: 'inherit',
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fill: primary,
        },
      },
    },
  },
});
