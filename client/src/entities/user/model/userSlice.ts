import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../../shared/store/model/store";

export interface UserState {
    id: string | null;
    currentQuestionId: number;
    score: number;
}

const initialState: UserState = {
    id: null,
    currentQuestionId: 0,
    score: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        incrementCurrentQuestionId: state => {
            state.currentQuestionId += 1;
        },
        incrementScore: state => {
            state.score += 1;
        },
        resetScore: state => {
            state.score = initialState.score;

        },
        resetCurrentQuestionId: state => {
            state.currentQuestionId = initialState.currentQuestionId;
        }
    }

})

export const getUserId = (state: RootState) => state.user.id;
export const getCurrentQuestionId = (state: RootState) => state.user.currentQuestionId;
export const getScore = (state: RootState) => state.user.score;
export const {
    setUserId,
    incrementCurrentQuestionId,
    incrementScore,
    resetScore,
    resetCurrentQuestionId
} = userSlice.actions;
export default userSlice.reducer;