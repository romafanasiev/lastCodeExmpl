import React from 'react';
import { SvgIcon } from '@mui/material';
import { palette } from 'Constants';

export const UserActiveIcon = (
  <SvgIcon
    sx={{ width: '30px', height: '30px', fill: palette.primary }}
    viewBox="0 0 30 30"
  >
    <path d="M20.8 27.5H9.2C7.93646 27.4541 6.75946 26.8463 5.99043 25.8427C5.2214 24.8391 4.9407 23.5445 5.225 22.3125L5.525 20.8875C5.87004 18.9585 7.52827 17.5409 9.4875 17.5H20.5125C22.4717 17.5409 24.13 18.9585 24.475 20.8875L24.775 22.3125C25.0593 23.5445 24.7786 24.8391 24.0096 25.8427C23.2405 26.8463 22.0635 27.4541 20.8 27.5Z" />
    <path d="M15.625 15H14.375C11.6136 15 9.37499 12.7614 9.37499 9.99999V6.69999C9.37166 5.58506 9.81308 4.51484 10.6015 3.72646C11.3898 2.93808 12.4601 2.49666 13.575 2.49999H16.425C17.5399 2.49666 18.6101 2.93808 19.3985 3.72646C20.1869 4.51484 20.6283 5.58506 20.625 6.69999V9.99999C20.625 11.3261 20.0982 12.5978 19.1605 13.5355C18.2228 14.4732 16.9511 15 15.625 15Z" />
  </SvgIcon>
);