import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";
import { BASE_URL } from "./request";


const client = new GraphQLClient(BASE_URL, {
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2M2NzMyNGU0ZGUzNTNiZWJhNWRmMyIsInJvbGUiOiJTdXBlckFkbWluIiwiZW1haWwiOiJhZG1pbjFAdml3ZWxsLmNvbSIsIm5hbWUiOiJ6YXJtYWIgaWxseWFzIiwiaXNzIjoidml3ZWxsLmNvbSIsImlhdCI6MTY0MjY3MjY0MywiZXhwIjoyNTg5NDAwNjQzfQ.vXmWuk9JcgxDu4z_u_X6aZSq_TEnk6GQqEYOpCJwpLQ",
  },
});

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
  keepUnusedDataFor: 9999999999,
  refetchOnReconnect: true,
});
