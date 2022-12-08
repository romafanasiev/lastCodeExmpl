import { useLocation } from 'react-router-dom';
import {
  BoardsActiveIcon,
  BoardsIcon,
  DevicesActiveIcon,
  DevicesIcon,
  SensorsActiveIcon,
  SensorsIcon,
  FirmwareActiveIcon,
  FirmwareIcon,
  DashboardsActiveIcon,
  DashboardsIcon,
  VirtualDashboardsActiveIcon,
  VirtualDashboardsIcon,
  UsersActiveIcon,
  UsersIcon,
  SettingsActiveIcon,
  SettingsIcon,
} from 'Assets';
import { palette, ROUTES } from 'Constants';
import { useProjectId } from 'Hooks/useProjectId';

type NavItem = {
  icon: JSX.Element;
  text: string;
  to: string;
  textColor: string;
  active: boolean;
};

const {
  projects,
  boards,
  devices,
  sensors,
  firmware,
  dashboards,
  virtualDashboards,
  management,
  settings,
} = ROUTES;

export const useNavItems = (): NavItem[] => {
  const { pathname } = useLocation();
  const projectId = useProjectId();
  const navLinks = [
    {
      icon: pathname.includes(boards) ? BoardsActiveIcon : BoardsIcon,
      text: 'Boards',
      to: `${projects}/${projectId}${boards}`,
      textColor: pathname.includes(boards) ? palette.primary : palette.icons,
      active: pathname.includes(boards),
    },
    {
      icon: pathname.includes(devices) ? DevicesActiveIcon : DevicesIcon,
      text: 'Devices',
      to: `${projects}/${projectId}${devices}`,
      textColor: pathname.includes(devices) ? palette.primary : palette.icons,
      active: pathname.includes(devices),
    },
    {
      icon: pathname.includes(sensors) ? SensorsActiveIcon : SensorsIcon,
      text: 'Sensors',
      to: `${projects}/${projectId}${sensors}`,
      textColor: pathname.includes(sensors) ? palette.primary : palette.icons,
      active: pathname.includes(sensors),
    },
    {
      icon: pathname.includes(firmware) ? FirmwareActiveIcon : FirmwareIcon,
      text: 'Firmware Updates',
      to: `${projects}/${projectId}${firmware}`,
      textColor: pathname.includes(firmware) ? palette.primary : palette.icons,
      active: pathname.includes(firmware),
    },
    {
      icon: pathname.includes(dashboards)
        ? DashboardsActiveIcon
        : DashboardsIcon,
      text: 'Dashboard',
      to: `${projects}/${projectId}${dashboards}`,
      textColor: pathname.includes(dashboards)
        ? palette.primary
        : palette.icons,
      active: pathname.includes(dashboards),
    },
    {
      icon: pathname.includes(virtualDashboards)
        ? VirtualDashboardsActiveIcon
        : VirtualDashboardsIcon,
      text: 'Virtual Dashboards',
      to: `${projects}/${projectId}${virtualDashboards}`,
      textColor: pathname.includes(virtualDashboards)
        ? palette.primary
        : palette.icons,
      active: pathname.includes(virtualDashboards),
    },
    {
      icon: pathname.includes(management) ? UsersActiveIcon : UsersIcon,
      text: 'User Management',
      to: `${projects}/${projectId}${management}`,
      textColor: pathname.includes(management)
        ? palette.primary
        : palette.icons,
      active: pathname.includes(management),
    },
    {
      icon: pathname.includes(settings) ? SettingsActiveIcon : SettingsIcon,
      text: 'Settings',
      to: `${projects}/${projectId}${settings}`,
      textColor: pathname.includes(settings) ? palette.primary : palette.icons,
      active: pathname.includes(settings),
    },
  ];

  return navLinks;
};
