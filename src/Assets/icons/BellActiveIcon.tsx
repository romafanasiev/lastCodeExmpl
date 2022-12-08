import React from 'react';
import { SvgIcon } from '@mui/material';
import { palette } from 'Constants';

export const BellActiveIcon = (
  <SvgIcon
    sx={{ width: '24px', height: '24px', fill: palette.primary }}
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4066 13.97C20.4094 14.5511 20.6649 15.1023 21.1066 15.48C22.6166 16.83 21.5466 19.14 19.4066 19.14H15.6066C15.114 20.4844 13.8383 21.3814 12.4066 21.39C10.9702 21.3962 9.68678 20.4938 9.20657 19.14H5.40657C3.26657 19.14 2.19657 16.83 3.70657 15.48C4.1482 15.1023 4.40369 14.5511 4.40657 13.97V9.14C4.40657 5.2 7.98657 2 12.4066 2C16.8266 2 20.4066 5.2 20.4066 9.14V13.97ZM10.8866 19.14C11.2505 19.611 11.8114 19.8878 12.4066 19.89C12.9877 19.8756 13.5314 19.6001 13.8866 19.14H10.8866Z"
    />
  </SvgIcon>
);
