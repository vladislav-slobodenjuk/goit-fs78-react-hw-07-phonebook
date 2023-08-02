// import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilterContacts(value));
  };

  return (
    <StyledFilter>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </StyledFilter>
  );
};

// Filter.propTypes = {
//   filterValue: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired,
// };
