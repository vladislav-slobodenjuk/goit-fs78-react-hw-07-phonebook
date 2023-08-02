// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Container } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

// import { getContacts, getFilter } from 'redux/selectors';
// import { addContact, deleteContact } from 'redux/contactsSlice';
// import { setFilterContacts } from 'redux/filterSlice';

export const App = () => {
  // const { contacts } = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // const dispatch = useDispatch();

  // const handleFilterChange = ({ target: { value } }) => {
  // dispatch(setFilterContacts(value));
  // };

  // const handleAddContact = ({ name, number }) => {
  //   const isExist = contacts.find(contact => contact.name === name);
  //   if (isExist) return alert(`${name} is already in contacts.`);

  //   dispatch(addContact({ name, number }));
  // };

  // const handleDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   // console.log('savedContacts', savedContacts);
  //   if (savedContacts) setContacts(savedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  //   // console.log('second');
  // }, [contacts]);

  // const filteredContacts = filterContacts();

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
