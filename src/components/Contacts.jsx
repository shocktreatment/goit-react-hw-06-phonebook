import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';

import style from './contacts.module.scss';

const Contacts = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const isDublicate = (name, number) => {
    const normalizeName = name.toLowerCase();
    const result = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizeName ||
        contact.number === number
      );
    });
    return Boolean(result);
  };

  const onAddContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      alert('This name or number is busy');
      return;
    }
    dispatch(addContact({ name, number }));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizeFilter = String(filter.toLowerCase());
    const result = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });

    return result;
  };

  const filteredContacts = getFilteredContacts();
  const isContacts = contacts.length;

  return (
    <div className={style.box}>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} />
      <ContactsList contacts={filteredContacts} />
      {!isContacts && <p>No contacts</p>}
    </div>
  );
};
export default Contacts;
