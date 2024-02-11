import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    addContact(state, action) {
      const check = state.contacts.findIndex(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (!!~check) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      state.contacts.push(newContact);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedReducer = persistReducer(persistConfig, phonebookReducer);

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;
