import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.items = [];
  state.error = action.payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const idx = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(idx, 1);
        // state.items = state.items.filter(item => item.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isPending(addContact, deleteContact, fetchContacts), state =>
        handlePending(state)
      )
      .addMatcher(
        isRejected(addContact, deleteContact, fetchContacts),
        (state, action) => handleRejected(state, action)
      ),
});

export const contactsReducer = contactsSlice.reducer;
