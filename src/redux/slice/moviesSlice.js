import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
