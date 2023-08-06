import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const { isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />

      {isLoading && <Loader />}
    </Container>
  );
};
