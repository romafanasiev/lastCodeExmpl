import React, { ChangeEvent, FC, useState } from 'react';
import { CircularProgress, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ProjectCard, SearchField } from 'Components';
import { useGetProjectsQuery } from 'Api/generated/graphql';
import { ROUTES } from 'Constants';
import { ProjectsPageModal } from './ProjectPageModal.component';

const { projects, boards } = ROUTES;

export const ProjectsPage: FC = () => {
  const { data, loading } = useGetProjectsQuery();
  const [search, setSearch] = useState('');
  let projectsList = data !== undefined ? [...data.projects] : [];

  if (search.length > 0) {
    projectsList = projectsList.filter((project) => {
      return project.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Stack gap="30px" flexDirection="row" alignItems="center">
        <Typography variant="h4">Projects</Typography>
        <SearchField isBig={true} handleChange={handleSearch} />
      </Stack>
      <Stack
        flexDirection="row"
        gap="30px"
        flexWrap="wrap"
        justifyContent="center"
      >
        <ProjectsPageModal />
        {Boolean(loading) && <CircularProgress />}
        {projectsList.map((project) => {
          const { id, description, name, owner } = project;
          return (
            <Link
              key={id}
              to={`${projects}/${id}${boards}`}
              component={RouterLink}
              sx={{
                textTransform: 'none',
              }}
            >
              <ProjectCard
                description={description}
                name={name}
                ownerName={`${owner.firstName} ${owner.lastName}`}
              />
            </Link>
          );
        })}
      </Stack>
    </>
  );
};
