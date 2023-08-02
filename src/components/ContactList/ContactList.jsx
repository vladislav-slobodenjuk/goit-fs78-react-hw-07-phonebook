// import PropTypes from 'prop-types';
import { ListItem } from './ListItem/ListItem';
import { StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

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
      {contacts.length === 0 && (
        <li>
          <p className="emptyList">Nothing found</p>
        </li>
      )}
    </StyledList>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteClick: PropTypes.func.isRequired,
// };
