import React, { FC } from 'react';
import { Avatar, AvatarProps } from '@mui/material';
import { DefaultAvatarIcon } from 'Assets';

export const MainAvatar: FC<AvatarProps> = ({ sx, src }) => {
  return (
    <Avatar sx={sx} src={src}>
      {DefaultAvatarIcon}
    </Avatar>
  );
};
