// import { useEffect } from 'react';

import { Container } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   // console.log('savedContacts', savedContacts);
  //   if (savedContacts) setContacts(savedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  //   // console.log('second');
  // }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
