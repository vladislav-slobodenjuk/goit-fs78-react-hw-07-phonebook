import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledForm } from './ContactForm.styled';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [data, setData] = useState({ name: '', phone: '' });
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const hadleInputChange = ({ target: { name, value } }) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = items.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.phone === phone
    );
    if (isExist) return alert(`${name} or ${phone} is already in contacts.`);

    dispatch(addContact({ name: name.trim(), phone }));
    setData({ name: '', phone: '' });
  };

  const { name, phone } = data;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={hadleInputChange}
        />
      </label>

      <label>
        Number:
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={hadleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </StyledForm>
  );
};
