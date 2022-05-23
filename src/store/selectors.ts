import { RootState } from './index';

export const typeStringSelector = (state: RootState) => state.typeString.value;

export const enteredStringSelector = (state: RootState) =>
  state.typeString.enteredStringValue;

export const resultsSelector = (state: RootState) => state.results.value;
