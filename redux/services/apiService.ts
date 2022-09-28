import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as baseUrl from "../../application.json";

export const providerApi = createApi({
  reducerPath: "providerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.api_service_base_url,
    // prepareHeaders: async (headers, { getState }) => {

    // },
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query<any, void>({
      query: () => "users",
      transformResponse: async (response: any) => response,
    }),
    addUser: builder.mutation<any, object>({
      query: (data) => ({ url: "add", method: "POST", body: data }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserProfileQuery, useAddUserMutation } = providerApi;
