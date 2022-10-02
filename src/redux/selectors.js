export const selectContacts = state => state.items.contacts;

export const selectIsLoading = state => state.items.isLoading;

export const selectError = state => state.items.error;

export const selectFilterValue = state => state.filter;

export const selectFiltredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilterValue(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
