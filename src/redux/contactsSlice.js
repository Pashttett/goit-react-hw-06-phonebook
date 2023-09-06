import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '', 
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState, 
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    
    deleteContact: (state, action) => {
      const indexToDelete = state.contacts.findIndex((contact) => contact.id === action.payload);

      if (indexToDelete !== -1) {
        state.contacts.splice(indexToDelete, 1);
      }
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
