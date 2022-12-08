import React, { FC, useState, SyntheticEvent, ReactNode } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { TabPanel } from './TabPanel.component';

interface ITabType {
  item: ReactNode;
  class?: string;
}

interface IA11yItem {
  id: string;
  'aria-controls': string;
}

interface IMainTabs {
  tabsName: string;
  panels: ReactNode[];
  tabs: ITabType[];
}

const a11yProps = (index: number, name: string): IA11yItem => {
  return {
    id: `${name}-tab-${index}`,
    'aria-controls': `${name}-tabpanel-${index}`,
  };
};

export const MainTabs: FC<IMainTabs> = ({ tabsName, panels, tabs }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.12)' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label={`${tabsName}tabs`}
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                label={tab.item}
                {...a11yProps(0, tabsName)}
                key={index}
                className={tab.class}
              />
            );
          })}
        </Tabs>
      </Box>
      {panels.map((panel, index) => {
        return (
          <TabPanel value={value} index={index} name={tabsName} key={index}>
            {panel}
          </TabPanel>
        );
      })}
    </Box>
  );
};
