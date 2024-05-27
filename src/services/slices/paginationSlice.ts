import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const INITIAL_STATE = {
  page: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: INITIAL_STATE,
  reducers: {
      ChangePage(state, { payload }) {
      state.page = payload;
      return state;
    },
  },
});

export default paginationSlice.reducer;
export const { ChangePage } = paginationSlice.actions;
export const selectPage = (state: RootState) => state.pagination.page