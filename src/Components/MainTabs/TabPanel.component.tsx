import React from 'react';

interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
  name: string;
}

export const TabPanel = (props: ITabPanel): JSX.Element => {
  const { children, value, index, name, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${name}-tabpanel-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
