import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from "../../../entities/user/model/userSlice";
import quizSlice from "../../../entities/quiz/model/quizSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    quiz: quizSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
