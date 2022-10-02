import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// import { deleteContact } from 'redux/itemsSlice';
import { deleteContact } from 'redux/operations';

import { Button } from 'components/Button/Button';

import { ContactInfo } from 'components/ContactItem/ContactItem.styled';

export function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ContactInfo>{name}</ContactInfo>
      <ContactInfo>{phone}</ContactInfo>
      <Button title="delete" type="button" onClick={onDeleteContact} />
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
