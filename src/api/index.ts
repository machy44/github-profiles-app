import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = createHttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
