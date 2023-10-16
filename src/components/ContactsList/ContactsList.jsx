import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilterValue } from 'redux/phonebook.slice';
import PropTypes from 'prop-types';
import InputField from 'components/InputField';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onClickDelete }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  const filteredContacts = contacts.filter(it =>
    it.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.input}>
        <InputField
          label="Find contacts by name"
          value={filter}
          type="text"
          name="filter"
          onChange={handleInputChange}
        />
      </div>

      <div className={css.container}>
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={css.item}>
              <span className={css.name}>
                {name}: {number}
              </span>
              <button
                className={css.btn}
                type="button"
                onClick={() => onClickDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClickDelete: PropTypes.func.isRequired,
};

export default ContactsList;
