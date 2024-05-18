import { createSlice } from "@reduxjs/toolkit";
import { UserWords } from "../api/words/type";
import { wordApi } from "../api/words/wordApi";
import { RootState } from "../store";



const INITIAL_STATE: UserWords = {
    results:[],
    totalPages: 0,
    page: 0,
    perPage: 0,
}

const userWordsSlice = createSlice({
    name: "userWords",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                wordApi.endpoints.usersWords.matchFulfilled,
                (state, { payload }) => {
                    state.results = payload.results;
                    state.totalPages = payload.totalPages;
                    state.page = payload.page;
                    state.perPage = payload.perPage;
                }
        )
    }
})

export default userWordsSlice.reducer;
export const selectAllUserWords = (state: RootState) => state.userWords;