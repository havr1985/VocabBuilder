import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserLoginReq, UserReq, User, CurrentUser, UserLogout } from "./type";

const BASE_URL = "https://vocab-builder-backend.p.goit.global/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("voc-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation<User, UserReq>({
      query: (body) => ({
        url: "/users/signup",
        method: "POST",
        body,
      }),
      transformResponse: (response: User) => {
        localStorage.setItem("voc-token", response.token);
        return response;
      },
    }),
    login: builder.mutation<User, UserLoginReq>({
      query: (body) => ({
        url: "users/signin",
        method: "POST",
        body,
      }),
      transformResponse: (response: User) => {
        localStorage.setItem("voc-token", response.token);
        return response;
      },
    }),
    current: builder.query<CurrentUser, void>({
      query: () => ({
        url: "users/current",
        method: "GET",
      }),
    }),
    logout: builder.mutation<UserLogout, void>({
      query: () => ({
        url: "users/signout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useCurrentQuery,
  useLogoutMutation,
} = userApi;
