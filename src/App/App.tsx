import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import { Routing } from 'Routes';
import { client } from 'Api';
import { theme } from 'Theme';

export const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};
