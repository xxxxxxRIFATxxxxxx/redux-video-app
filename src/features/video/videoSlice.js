import { getVideo, increaseDislikes, increaseLikes } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video;
});

export const updateLikes = createAsyncThunk("video/updateLikes", async ({videoId, currentLikes}) => {
    const video = await increaseLikes(videoId, currentLikes);
    return video;
});

export const updateDislikes = createAsyncThunk("video/updateDislikes", async ({videoId, currentDislikes}) => {
    const video = await increaseDislikes(videoId, currentDislikes);
    return video;
});

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(updateLikes.fulfilled, (state, action) => {
                state.video.likes++;
            })
            .addCase(updateDislikes.fulfilled, (state, action) => {
                state.video.unlikes++;
            })
    },
});

export const {like, dislike} = videoSlice.actions;
export default videoSlice.reducer;
