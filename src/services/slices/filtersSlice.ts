import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


const INITIAL_STATE = {
    keyword: "",
    category: "",
    isIrregular: false || '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,
    reducers: {
        ChangeFilters(state, { payload }) {
            state.keyword = payload.debounceKeyword;
            state.category = payload.selectedCategory;
            state.isIrregular = payload.isIrregular;
        },
    },
});

export default filtersSlice.reducer;
export const { ChangeFilters } = filtersSlice.actions;
export const selectFilters = (state: RootState) => state.filters;