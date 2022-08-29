const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    searchByAuthor: "",
    clear: false
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.clear = false;
            state.tags.push(action.payload);
            state.searchByAuthor = "";
            state.search = "";
        },
        tagRemoved: (state, action) => {
            state.clear = false;
            state.searchByAuthor = "";
            state.search = "";
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
                state.searchByAuthor = "";
            }
        },
        searched: (state, action) => {
            state.clear = false;
            state.search = action.payload;
            state.searchByAuthor = "";
            state.tags = [];
        },

        searchedByAuthor: (state, action) => {
            state.clear = false;
            state.searchByAuthor = action.payload;
            state.search = "";
            state.tags = [];
        },

        resetFilters: (state) => {
            state.tags = [];
            state.search = "";
            state.searchByAuthor = "";
            state.clear = true;
        }
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, searchedByAuthor, resetFilters } = filterSlice.actions;
