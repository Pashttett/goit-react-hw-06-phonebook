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
      const { name, number } = action.payload;
      const existingName = state.contacts.find((contact) => contact.name === name);
      const existingNumber = state.contacts.find((contact) => contact.number === number);

      if (existingName) {
        return;
      }

      if (existingNumber) {
        return;
      }
      state.contacts.push(action.payload);
    },
    
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
