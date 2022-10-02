import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { addContact } from 'redux/itemsSlice';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

// import { nanoid } from 'nanoid';
import { Button } from 'components/Button/Button';

import {
  StyledContactForm,
  StyledLabel,
  StyledInput,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const isContactInList = contactName => {
    const lowercaseName = contactName.toLowerCase();
    return contacts.find(({ name }) =>
      name.toLowerCase().includes(lowercaseName)
    );
  };

  const handleFormormSubmit = e => {
    e.preventDefault();

    if (isContactInList(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contactItem = {
      name,
      phone,
    };

    dispatch(addContact(contactItem));

    reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        throw new Error('Not supported type');
    }
  };

  function reset() {
    setName('');
    setPhone('');
  }

  return (
    <StyledContactForm onSubmit={handleFormormSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </StyledLabel>
      <StyledLabel>
        Telephone
        <StyledInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleInputChange}
        />
      </StyledLabel>
      <Button title="add contact" type="submit" />
    </StyledContactForm>
  );
};
