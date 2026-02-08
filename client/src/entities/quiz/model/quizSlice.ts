import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../shared/store/model/store";
import {IQuiz} from "./IQuiz";
import {fetchQuizzes} from "../api/quizActionCreators";

export interface QuizState {
    questions: IQuiz[] | null;
    status: 'idle' | 'pending' | 'succeed' | 'failed';
    currentQuestionId: number;
    error: string;
    selectedOption: string | null;
    scores: number[];
}

const initialState: QuizState = {
    questions: null,
    status: 'idle',
    currentQuestionId: 0,
    error: '',
    selectedOption: null,
    scores: []
};

export const quizSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        setSelectedOption: (state, action: PayloadAction<QuizState['selectedOption']>) => {
            state.selectedOption = action.payload;
        },
        addScore: (state, action: PayloadAction<number>) => {
            const newScore = action.payload;

            // we need on the leaderboard the scores sorted in reverse order
            if (state.scores.length) {
                let low = 0;
                let high = state.scores.length;
                let insertionIndex = state.scores.length; // by default paste element in the end

                // binary search to find paste index
                while (low < high) {
                    const mid = Math.floor((low + high) / 2);
                    if (state.scores[mid] > newScore) { // if current element > newScore, search right
                        low = mid + 1;
                    } else { // if current element <= newScore maybe it where we should paste element
                        insertionIndex = mid;
                        high = mid;
                    }
                }
                state.scores.splice(insertionIndex, 0, newScore)

            } else {
                state.scores.push(newScore);
            }
        },
        incrementCurrentQuestionId: state => {
            state.currentQuestionId += 1;
        },
        resetCurrentQuestionId: state => {
            state.currentQuestionId = initialState.currentQuestionId;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuizzes.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchQuizzes.fulfilled, (state, action: PayloadAction<IQuiz[]>) => {
            state.status = 'succeed';
            state.questions = action.payload;
        });
        builder.addCase(fetchQuizzes.rejected, (state, action) => {
            state.status = 'failed';
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = 'Unknown error occurred (no custom payload)';
            }
        });
    }
})

export const getQuizzes = (state: RootState) => state.quiz;
export const getQuestions = createSelector(
    [getQuizzes],
    (quizzes) => quizzes.questions
);
export const getQuizzesLength = (state: RootState) => state.quiz.questions && state.quiz.questions.length;
export const getCurrentQuestionId = (state: RootState) => state.quiz.currentQuestionId;
export const getCurrentQuestion = createSelector(
    [getQuestions, getCurrentQuestionId],
    (questions, currentQuestionId) => questions && questions[currentQuestionId].question
);
export const getCurrentQuizOptions = createSelector(
    [getQuestions, getCurrentQuestionId],
    (questions, currentQuestionId) => questions && questions[currentQuestionId].options
);
export const getCurrentQuizCorrectAnswer = createSelector(
    [getQuestions, getCurrentQuestionId],
    (questions, currentQuestionId) => questions && questions[currentQuestionId].correct
);
export const getSelectedOption = (state: RootState) => state.quiz.selectedOption;
export const getScores = (state: RootState) => state.quiz.scores;
export const getStatus = (state: RootState) => state.quiz.status;

export const {setSelectedOption, addScore, incrementCurrentQuestionId, resetCurrentQuestionId} = quizSlice.actions;

export default quizSlice.reducer;