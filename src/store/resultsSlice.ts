import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Results = {
  mistakes?: number;
  statistics?: number;
  language?: string;
};

interface resultsState {
  value: Results;
}

const initialState: resultsState = {
  value: {
    mistakes: 0,
    statistics: 100,
    language: '',
  },
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<object>) => {
      state.value = action.payload;
    },
  },
});

export const { setResults } = resultsSlice.actions;

export default resultsSlice.reducer;
