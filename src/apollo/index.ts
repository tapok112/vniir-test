import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({ uri: `https://www.onlinetool.in/api/products` });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});

export default client;