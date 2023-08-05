import PropTypes from 'prop-types';

export const ListItem = ({ contact, onDeleteClick }) => {
  const { id, name, phone } = contact;
  return (
    <li>
      <p>
        {name}: <span>{phone}</span>
      </p>
      <button type="button" onClick={() => onDeleteClick(id)}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
