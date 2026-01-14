import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../shared/store/model/store";
import {IQuiz} from "./IQuiz";
import {fetchQuizzes} from "../api/quizActionCreators";

export interface QuizState {
    questions: IQuiz[] | null;
    isLoading: boolean;
    error: string;
    selectedOption: number | null;
    isAnswerChecked: boolean;
    scores: number[];
}

const initialState: QuizState = {
    questions: null,
    isLoading: false,
    error: '',
    selectedOption: null,
    isAnswerChecked: false,
    scores: []
};

export const quizSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        setSelectedOption: (state, action: PayloadAction<QuizState['selectedOption']>) => {
            state.selectedOption = action.payload;
        },
        setIsAnswerChecked: (state, action: PayloadAction<QuizState['isAnswerChecked']>) => {
            state.isAnswerChecked = action.payload;
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
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuizzes.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchQuizzes.fulfilled, (state, action: PayloadAction<IQuiz[]>) => {
            state.isLoading = false;
            state.questions = action.payload;
        });
        builder.addCase(fetchQuizzes.rejected, (state, action) => {
            state.isLoading = false;
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = 'Unknown error occurred (no custom payload)';
            }
        });
    }
})


export const getQuizzes = (state: RootState) => state.quiz;
export const getSelectedOption = (state: RootState) => state.quiz.selectedOption;
export const getIsAnswerChecked = (state: RootState) => state.quiz.isAnswerChecked;
export const getScores = (state: RootState) => state.quiz.scores;
export const {setSelectedOption, setIsAnswerChecked, addScore} = quizSlice.actions;
export default quizSlice.reducer;