import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from 'Constants';

export const PrivateRoutes = (): ReactElement<any, any> => {
  const localStorageToken = localStorage.getItem('token');
  const sessionStorageToken = sessionStorage.getItem('token');
  return localStorageToken !== null || sessionStorageToken !== null ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.signIn} />
  );
};
