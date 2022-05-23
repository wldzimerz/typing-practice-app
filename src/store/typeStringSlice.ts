import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface typeStringState {
  value: string | undefined;
  enteredStringValue: string;
}

const initialState: typeStringState = {
  value: 'initial value',
  enteredStringValue: '',
};

export const typeStringSlice = createSlice({
  name: 'typeString',
  initialState,
  reducers: {
    setTypeString: (state, action: PayloadAction<string | undefined>) => {
      state.value = action.payload;
    },
    setEnteredString: (state, action: PayloadAction<string>) => {
      state.enteredStringValue = `${state.enteredStringValue}${action.payload}`;
    },
    resetEnteredString: (state) => {
      state.enteredStringValue = '';
    },
  },
});

export const { setTypeString, setEnteredString, resetEnteredString } =
  typeStringSlice.actions;

export default typeStringSlice.reducer;
