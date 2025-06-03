import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Info: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadtv: (state, action) => {
      state.Info = action.payload;
    },
    removetv: (state) => {
      state.Info = null;
    },
  },
});

export const { loadtv, removetv } = tvSlice.actions;

export default tvSlice.reducer;
