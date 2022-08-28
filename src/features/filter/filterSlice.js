const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    searchByAuthor: "",
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
            state.searchByAuthor = "";
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);
            state.searchByAuthor = "";

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
                state.searchByAuthor = "";
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
            state.searchByAuthor = "";
        },

        searchedByAuthor: (state, action) => {
            state.searchByAuthor = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, searchedByAuthor } = filterSlice.actions;
