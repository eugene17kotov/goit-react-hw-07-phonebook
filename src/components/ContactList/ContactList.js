import { useSelector } from 'react-redux';
import {
  selectFiltredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

import {
  StyledContactList,
  StyledContact,
} from 'components/ContactList/ContactList.styled';

export function ContactList() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {filtredContacts.length > 0 && !error && !isLoading ? (
        <StyledContactList>
          {filtredContacts.map(({ id, name, phone }) => (
            <StyledContact key={id}>
              <ContactItem id={id} name={name} phone={phone} />
            </StyledContact>
          ))}
        </StyledContactList>
      ) : (
        <p>Not found any contact :(</p>
      )}
    </>
  );
}
