import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { CachePersistor } from 'apollo3-cache-persist';

const httpLink = createHttpLink({
  uri: `${
    process.env.REACT_APP_API_ENDPOINT !== undefined
      ? process.env.REACT_APP_API_ENDPOINT
      : ''
  }graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  const sessionToken = sessionStorage.getItem('token');
  const choosenToken =
    typeof token === 'string' && token?.length > 0 ? token : sessionToken;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${String(choosenToken)}`,
    },
  };
});

const cache = new InMemoryCache();

export const persistor = new CachePersistor({
  storage: window.localStorage,
  cache,
});

await persistor.restore();

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
