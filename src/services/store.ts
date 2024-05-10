import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/auth/userApi";
import auth from "@/services/slices/authSlice";
import categories from "@/services/slices/categoriesSlice";
import { wordApi } from "./api/words/wordApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [wordApi.reducerPath]: wordApi.reducer,
    auth,
    categories,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, wordApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
