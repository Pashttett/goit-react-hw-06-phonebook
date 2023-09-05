import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ContactListContainer, ContactListItem, DeleteButton } from './ContactList.styled';

function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Do you really want to delete this contact?')) {
      dispatch(deleteContact(id));
    }
  }

  return (
    <ContactListContainer>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => handleDelete(contact.id)}>Delete</DeleteButton>
        </ContactListItem>
      ))}
    </ContactListContainer>
  );
}

export default ContactList;
