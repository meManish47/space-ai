import { GraphQLClient } from "graphql-request";

const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
  "http://localhost:3000/api/graphql";

export const gqlClient = new GraphQLClient(endpoint);
