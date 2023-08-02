// import { useState } from 'react';
// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { StyledForm } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const { contacts } = useSelector(getContacts);

  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleInputChange = ({ target }) => {
  // this.setState({ [target.name]: target.value });
  // if (target.name === 'name') setName(target.value);
  // if (target.name === 'number') setNumber(target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const number = e.target.number.value.trim();

    // onHandleSubmit({ name, number });
    // this.setState({ name: '', number: '' });
    // setName('');
    // setNumber('');

    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) return alert(`${name} is already in contacts.`);

    dispatch(addContact({ name, number }));

    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // value={name}
          // onChange={handleInputChange}
        />
      </label>

      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // value={number}
          // onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </StyledForm>
  );
};

// ContactForm.propTypes = {
//   onHandleSubmit: PropTypes.func.isRequired,
// };
