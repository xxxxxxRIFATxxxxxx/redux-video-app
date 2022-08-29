const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    page: "1",
    limit: 8,
};


const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload;
        },

        resetPagination: (state) => {
            state.page = "1";
        }
    }
});

export const { changePage, resetPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
