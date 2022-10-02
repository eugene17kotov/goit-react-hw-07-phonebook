import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://6332e80c573c03ab0b53841c.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactsData, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { ...contactsData });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// WITHOUT THUNK

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from 'redux/itemsSlice';

// axios.defaults.baseURL =
//   'https://6332e80c573c03ab0b53841c.mockapi.io/phonebook';

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());

//     const { data } = await axios.get('/contacts');

//     dispatch(fetchingSuccess(data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
