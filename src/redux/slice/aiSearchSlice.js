import { createSlice } from "@reduxjs/toolkit";

const aiSerachSlice = createSlice({
  name: "ai",
  initialState: {
    isAiPage: false,
    movieList: null,
    moviesData: null,
  },
  reducers: {
    aiPage: (state) => {
      state.isAiPage = !state.isAiPage;
    },
    addAiMovies: (state, action) => {
      const { moviesData, movieList } = action.payload;
      state.moviesData = moviesData;
      state.movieList = movieList;
    },
  },
});

export const { aiPage, addAiMovies } = aiSerachSlice.actions;
export default aiSerachSlice.reducer;
