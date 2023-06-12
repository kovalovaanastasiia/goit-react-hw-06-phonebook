import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import {nanoid} from 'nanoid';
import storage from 'redux-persist/lib/storage';

const initialStateContacts = {
  contacts: [
    {id: 'id-1', name: 'Poly Wally', number: '123-12-23'},
    {id: 'id-2', name: 'Mango Rango', number: '444-55-17'},
    {id: 'id-3', name: 'Tony Rouni', number: '565-88-89'},
    {id: 'id-4', name: 'Raily Touli', number: '123-45-67'},
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  reducers: {
    addContact(state, action) {
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      state.contacts.push(contact);
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(e => e.id !== action.payload);
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const {addContact, deleteContact} = contactsSlice.actions;
export const getContacts = state => state.contacts.contacts;
