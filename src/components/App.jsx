import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';


const storageKey = 'contacts';
const savedContacts = window.localStorage.getItem(storageKey);


export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(savedContacts) ?? []);
  const [filters, setFilters] = useState('');

  

  useEffect(() => {
      window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);


  const updateFilter = newTopic => {
    setFilters(newTopic);
  };


  const filteredContacts = contacts.filter(contact => {
    const contactName = contact.name.toLowerCase();
    const contactNumber = contact.number;
    return (
      contactName.includes(filters.toLowerCase()) ||
      contactNumber.includes(filters)
    );
  });


  const deletePhone = phoneId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== phoneId)
    );
  };


  const addPhone = newItem => {
    if (contacts.some(contact => contact.number === newItem.number)) {
      alert('Contact with the same number already exists!');
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        { ...newItem, id: nanoid() },
      ]);
    }
  };
  

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addPhone} />
      <h2>Contacts</h2>
      <Filter filter={filters} onSearchNumber={updateFilter} />
      <ContactList items={filteredContacts} onDelete={deletePhone} />
    </Container>
  );
};
