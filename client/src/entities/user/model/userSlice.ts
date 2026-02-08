import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "@/shared/store/model/store.ts";

export interface UserState {
    id: string | null;
    score: number;
}

const initialState: UserState = {
    id: null,
    score: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        incrementScore: state => {
            state.score += 1;
        },
        resetScore: state => {
            state.score = initialState.score;

        }
    }
})

export const getUserId = (state: RootState) => state.user.id;
export const getScore = (state: RootState) => state.user.score;
export const {setUserId, incrementScore, resetScore} = userSlice.actions;
export default userSlice.reducer;