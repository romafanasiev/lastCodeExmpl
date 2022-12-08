import React from 'react';
import { SvgIcon } from '@mui/material';
import { palette } from 'Constants';

export const BoardsActiveIcon = (
  <SvgIcon
    sx={{ width: '30px', height: '30px', fill: palette.primary }}
    viewBox="2 0 30 30"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 23.0125H16.7638C20.9063 23.0125 24.2638 19.655 24.2638 15.5125V11.25C24.2638 7.10625 20.9063 3.75 16.7638 3.75H12.5C8.3575 3.75 5 7.10625 5 11.25V15.5125C5 19.655 8.3575 23.0125 12.5 23.0125ZM7.75675 27.4436H21.5068C22.0243 27.4436 22.4443 27.0236 22.4443 26.5061C22.4443 25.9886 22.0243 25.5686 21.5068 25.5686H7.75675C7.23925 25.5686 6.81925 25.9886 6.81925 26.5061C6.81925 27.0236 7.23925 27.4436 7.75675 27.4436Z"
    />
  </SvgIcon>
);
