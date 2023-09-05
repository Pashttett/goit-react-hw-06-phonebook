import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { StyledContactForm } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!Array.isArray(contacts)) {
      return;
    }


    const existingName = contacts.find((contact) => contact.name === name);
    const existingNumber = contacts.find((contact) => contact.number === number);

    if (existingName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    if (existingNumber) {
      alert(`Number ${number} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  }

  return (
    <StyledContactForm onSubmit={handleSubmit}>
    </StyledContactForm>
  );
}

export default ContactForm;
