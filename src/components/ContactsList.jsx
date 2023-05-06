import PropTypes from 'prop-types';

import Item from './ContactsListItem';

import style from './contacts.module.scss';

const ContactsList = ({ contacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <Item key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
