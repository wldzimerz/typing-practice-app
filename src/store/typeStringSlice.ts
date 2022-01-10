import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

interface typeStringState {
  value: string[];
  enteredStringValue: string;
}

const initialState: typeStringState = {
  value: ['initial', 'value'],
  enteredStringValue: '',
};

export const typeStringSlice = createSlice({
  name: 'typeString',
  initialState,
  reducers: {
    setTypeString: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
    setEnteredString: (state, action: PayloadAction<string>) => {
      state.enteredStringValue += action.payload;
    },
  },
});

export const { setTypeString, setEnteredString } = typeStringSlice.actions;

export const typeString = (state: RootState) => state.typeString.value;
export const enteredString = (state: RootState) => state.typeString.enteredStringValue;

export default typeStringSlice.reducer;
