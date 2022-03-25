import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleLoader: (state, action) => {
            state.loading = !state.loading
        }
    }

})

export const {toggleLoader} = uiSlice.actions
export default uiSlice.reducer