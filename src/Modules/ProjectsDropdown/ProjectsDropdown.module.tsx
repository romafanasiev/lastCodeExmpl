import React, { ChangeEvent, FC, useState } from 'react';
import { Typography, Stack, Divider, Box, List, ListItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown, SearchField } from 'Components';
import { palette, ROUTES } from 'Constants';
import { useGetProjectQuery, useGetProjectsQuery } from 'Api/generated/graphql';

const { projects, boards } = ROUTES;

export const ProjectsDropdown: FC = () => {
  const [search, setSearch] = useState('');
  const { data } = useGetProjectsQuery();
  let projectsList = data !== undefined ? [...data.projects] : [];
  const { pathname } = useLocation();
  const projectId = pathname.split('/')[2];
  const curentProject = useGetProjectQuery({
    variables: {
      id: projectId,
    },
  });

  if (search.length > 0) {
    projectsList = projectsList.filter((project) => {
      return project.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <Dropdown
      title={<Typography>{curentProject.data?.project.name}</Typography>}
    >
      <Stack minWidth="calc(300px - 32px)" gap="16px">
        <Box>
          <Typography
            to={ROUTES.projects}
            component={Link}
            sx={{
              display: 'flex',
              alignItems: 'center',
              margin: '0 -16px',
              padding: '0 16px',
              height: '36px',
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                backgroundColor: palette.hover,
              },
            }}
          >
            See all projects
          </Typography>
          <Divider sx={{ margin: '5px -16px 8px' }} />
        </Box>
        <SearchField
          isBig={false}
          placeholder="Search project"
          handleChange={handleSearch}
        />
        <List sx={{ margin: '0 -16px' }}>
          {projectsList.map((project) => {
            const { id, name } = project;
            return (
              <ListItem
                key={id}
                to={`${projects}/${id}${boards}`}
                component={Link}
                sx={{
                  height: '36px',
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: palette.hover,
                  },
                }}
              >
                {name}
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Dropdown>
  );
};
