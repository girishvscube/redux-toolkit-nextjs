import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
export interface countState {
    value: number
}

const initialState: countState = {
    value: 10
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        }
    },
});

export const { increment ,decrement} = counterSlice.actions
export default counterSlice.reducer