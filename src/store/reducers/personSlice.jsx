import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Info: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    loadperson: (state, action) => {
      state.Info = action.payload;
    },
    removeperson: (state) => {
      state.Info = null;
    },
  },
});

export const { loadperson, removeperson } = personSlice.actions;

export default personSlice.reducer;
