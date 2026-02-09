import { createAsyncThunk, GetThunkAPI } from '@reduxjs/toolkit';
import type { IQuiz } from '../model/IQuiz';
import { getStatus, type QuizState } from '../model/quizSlice';
import type { RootState } from '@/shared/store/model/store.ts';

export const fetchQuizzes = createAsyncThunk<IQuiz[], void, { state: RootState; rejectValue: QuizState['error'] }>(
	'quizzes/fetchAll',
	(_, thunkAPI) => {
		return fetch('http://localhost:5000/questions')
			.then((response) => response.json())
			.catch((error) => thunkAPI.rejectWithValue(error.message));
	},
	{
		condition(_, thunkAPI) {
			const status = getStatus(thunkAPI.getState());
			if (status !== 'idle') {
				return false;
			}
		},
	},
);
