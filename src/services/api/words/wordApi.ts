import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddWordReq, UserWords, Word } from "./type";


const BASE_URL = "https://vocab-builder-backend.p.goit.global/api";
enum TAGS {
  WORD = 'WORD'
}

export const wordApi = createApi({
  reducerPath: "wordApi",
  tagTypes: [TAGS.WORD],
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
    usersWords: builder.query<UserWords, void>({
      query: () => ({
        url: "/words/own",
        method: "GET",
      }),
      providesTags: [TAGS.WORD]
    }),
    addWord: builder.mutation<Word, AddWordReq>({
      query: (body) => ({
        url: "words/create",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.WORD]
    }),
  }),
});

export const { useCategoriesQuery, useUsersWordsQuery, useAddWordMutation } = wordApi;