import React, { FC, useState } from 'react';
import { IconButton, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { LogoIcon, MenuOpenIcon, MenuCloseIcon } from 'Assets';
import { ROUTES, palette } from 'Constants';
import { useNavItems } from 'Hooks';

const { smallSideBarWidth, sidebarBorderRadius, bigSideBarWidth } = palette;

export const Sidebar: FC = () => {
  const [isLarge, setIsLarge] = useState(false);
  const navItems = useNavItems();
  const sidebarStyles = {
    sidebar: {
      boxSizing: 'border-box',
      justifyContent: 'space-between',
      gap: '30px',
      padding: '30px',
      minWidth: `${isLarge ? bigSideBarWidth : smallSideBarWidth}`,
      minHeight: '100vh',
      backgroundColor: 'background.paper',
      borderTopRightRadius: sidebarBorderRadius,
      borderBottomRightRadius: sidebarBorderRadius,
    },
    menuLink: {
      position: 'relative',
      display: 'flex',
      maxWidth: 'max-content',
      flexDirection: 'row',
      gap: '16px',
      alignItems: 'center',
      textTransform: 'none',
    },
    menuOpener: {
      alignSelf: 'start',
      ml: '4px',
      height: '24px',
      width: '24px',
      padding: 0,
    },
  };

  const activeMenuLink = {
    ...sidebarStyles.menuLink,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '5px',
      left: '5px',
      display: 'block',
      borderRadius: '8px',
      backgroundColor: 'rgba(202, 238, 206, 0.15)',
      height: '100%',
      width: '100%',
    },
  };

  return (
    <Stack sx={sidebarStyles.sidebar}>
      <Link to={ROUTES.projects} component={RouterLink}>
        {LogoIcon}
      </Link>
      <Stack gap="calc(100vh * 0.06)">
        {navItems.map((item) => {
          return (
            <Link
              to={item.to}
              component={RouterLink}
              key={item.text}
              sx={item.active ? activeMenuLink : sidebarStyles.menuLink}
            >
              {item.icon}
              {isLarge && (
                <Typography
                  color={item.textColor}
                  component="span"
                  fontWeight={500}
                >
                  {item.text}
                </Typography>
              )}
            </Link>
          );
        })}
      </Stack>
      <IconButton
        disableRipple
        onClick={() => setIsLarge(!isLarge)}
        sx={sidebarStyles.menuOpener}
      >
        {isLarge ? MenuCloseIcon : MenuOpenIcon}
      </IconButton>
    </Stack>
  );
};
