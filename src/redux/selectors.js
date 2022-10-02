import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.items.contacts;

export const selectIsLoading = state => state.items.isLoading;

export const selectError = state => state.items.error;

export const selectFilterValue = state => state.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
