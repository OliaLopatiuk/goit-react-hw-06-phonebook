import { Contact, Button, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  getContacts,
  getFilter,
} from '../../redux/phonebookSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            <Contact>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                ×
              </Button>
            </Contact>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
