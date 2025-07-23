import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/moviesSlice";
import aiPageReducer from "./slice/aiSearchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    ai: aiPageReducer,
  },
});

export default appStore;
