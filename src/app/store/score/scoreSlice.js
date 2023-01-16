import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMainManu: true,
  currentHomeCountry: undefined,
  currentAwayCountry: undefined,
  scores: [],
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setIsMainManu: (state, action) => {
      state.isMainManu = action.payload;
    },
    setCurrentHomeCountry: (state, action) => {
      state.currentHomeCountry = action.payload;
    },
    setCurrentAwayCountry: (state, action) => {
      state.currentAwayCountry = action.payload;
    },
    setScores: (state, action) => {
      state.scores = action.payload;
    },
  },
});

export const {
  setIsMainManu,
  setCurrentHomeCountry,
  setCurrentAwayCountry,
  setScores,
} = scoreSlice.actions;

export const selectScore = (state) => state.score;

export default scoreSlice.reducer;
