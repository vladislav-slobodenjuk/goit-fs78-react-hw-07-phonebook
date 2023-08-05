import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ListItem } from './ListItem/ListItem';
import { StyledList } from './ContactList.styled';

import { getContacts, getFilter } from 'redux/selectors';
// import { deleteContact } from 'redux/contactsSlice';
import { deleteContact, fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = filterContacts();

  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <ListItem
          key={contact.id}
          contact={contact}
          onDeleteClick={handleDeleteContact}
        />
      ))}
      {filteredContacts.length === 0 &&
        items.length !== 0 &&
        !isLoading &&
        !error && (
          <li>
            <p className="emptyList">Nothing found</p>
          </li>
        )}
      {items.length === 0 && !isLoading && !error && (
        <li>
          <p className="emptyList">No saved contacts</p>
        </li>
      )}
      {error && (
        <li>
          <p className="emptyList">An Error acquired</p>
        </li>
      )}
      {isLoading && <Loader />}
    </StyledList>
  );
};
