import { createSlice } from "@reduxjs/toolkit";
import { wordApi } from "../api/words/wordApi";
import { RootState } from "../store";


type TInitialState = {
    categories: string[],
}

const INITIAL_STATE: TInitialState = {
    categories: []
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                wordApi.endpoints.categories.matchFulfilled,
                (state, { payload }) => {
                    state.categories = payload;
                }
            )
    }
});

export default categoriesSlice.reducer;
export const selectAllCategories = (state: RootState) => state.categories.categories;