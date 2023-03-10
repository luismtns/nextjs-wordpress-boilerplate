// Add Apollo Client to this file
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS}/graphql`,
  cache: new InMemoryCache(),
});
