import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { StyledContactForm } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

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
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </StyledContactForm>
  );
}

export default ContactForm;
