import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from 'Constants';
import {
  SignUpPage,
  SignInPage,
  ProjectsPage,
  BoardsPage,
  ProfilePage,
  SettingsPage,
  ManagmentPage,
  SensorsPage,
  AddBoardPage,
  DevicesPage,
} from 'Pages';
import { MainLayout, SecondaryLayout } from 'Layouts';
import { PrivateRoutes } from './Private-routes.component';

export const Routing: FC = () => {
  const {
    signUp,
    signIn,
    project,
    projects,
    boards,
    profile,
    settings,
    management,
    sensors,
    addBoard,
    devices,
  } = ROUTES;

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<SecondaryLayout />}>
          <Route path={projects} element={<ProjectsPage />} />
          <Route path={profile} element={<ProfilePage />} />
        </Route>

        <Route path={`${projects}${project}`} element={<MainLayout />}>
          <Route index element={<BoardsPage />} />
          <Route
            path={`${projects}${project}${boards}`}
            element={<BoardsPage />}
          />
          <Route
            path={`${projects}${project}${devices}`}
            element={<DevicesPage />}
          />
          <Route
            path={`${projects}${project}${addBoard}`}
            element={<AddBoardPage />}
          />
          <Route
            path={`${projects}${project}${sensors}`}
            element={<SensorsPage />}
          />
          <Route
            path={`${projects}${project}${management}`}
            element={<ManagmentPage />}
          />
          <Route
            path={`${projects}${project}${settings}`}
            element={<SettingsPage />}
          />
        </Route>

        <Route path="*" element={<Navigate to={projects} />} />
      </Route>
      <Route path={signUp} element={<SignUpPage />} />
      <Route path={signIn} element={<SignInPage />} />
    </Routes>
  );
};
