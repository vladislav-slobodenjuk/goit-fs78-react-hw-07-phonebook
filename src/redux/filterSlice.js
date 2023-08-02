import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterContacts(state, { payload }) {
      state = payload;
      return state;
    },
  },
});

export const { setFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
