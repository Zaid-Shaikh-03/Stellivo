import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Info: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadmovie: (state, action) => {
      state.Info = action.payload;
    },
    removemovie: (state) => {
      state.Info = null;
    },
  },
});

export const { loadmovie, removemovie } = movieSlice.actions;

export default movieSlice.reducer;
