import { useSelector } from 'react-redux';

import { ListItem } from './ListItem/ListItem';
import { StyledList } from './ContactList.styled';

import { selectContacts, selectfilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id} contact={contact} />
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
    </StyledList>
  );
};
