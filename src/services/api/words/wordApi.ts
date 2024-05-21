import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddWordReq, DelWord, UserWords, Word } from "./type";

const BASE_URL = "https://vocab-builder-backend.p.goit.global/api";
enum TAGS {
  WORD = "WORD",
}

export const wordApi = createApi({
  reducerPath: "wordApi",
  tagTypes: [TAGS.WORD],
  refetchOnMountOrArgChange: true,
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
    usersWords: builder.query<UserWords, {keyword?:string, category?:string}>({
      query: ({keyword, category}) => ({
        url: "/words/own",
        method: "GET",
        params: {keyword, category},
      }),
      providesTags: [TAGS.WORD],
    }),
    addWord: builder.mutation<Word, AddWordReq>({
      query: (body) => ({
        url: "words/create",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.WORD],
    }),
    deleteWord: builder.mutation<DelWord,  {id:string}>({
      query: ({ id }) => ({
        url: `/words/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAGS.WORD],
    }),
  }),
});

export const {
  useCategoriesQuery,
  useUsersWordsQuery,
  useAddWordMutation,
  useDeleteWordMutation,
} = wordApi;
