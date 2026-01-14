import {createAsyncThunk} from "@reduxjs/toolkit";
import {IQuiz} from "../model/IQuiz";
import {QuizState} from "../model/quizSlice";

export const fetchQuizzes = createAsyncThunk<IQuiz[], void, {rejectValue: QuizState['error']}>(
    'quizzes/fetchAll',
    (_, thunkAPI) => {
        return fetch('http://localhost:5000/questions')
            .then(response => response.json())
            .catch(error => thunkAPI.rejectWithValue(error.message))
    }
)