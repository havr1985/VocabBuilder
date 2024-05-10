import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserBooks } from "./type";

const BASE_URL = "https://vocab-builder-backend.p.goit.global/api";

export const wordApi = createApi({
  reducerPath: "wordApi",
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
    categories: builder.query<string[], void>({
      query: () => ({
        url: "/words/categories",
        method: "GET",
      }),
    }),
    usersBooks: builder.query<UserBooks, void>({
      query: () => ({
        url: "/words/own",
        method: "GET",
      })
    })
  }),
});

export const { useCategoriesQuery, useUsersBooksQuery } = wordApi;