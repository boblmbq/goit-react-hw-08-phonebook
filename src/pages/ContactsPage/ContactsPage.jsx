import ContactForm from 'components/ContactForm';
import { Div } from './ContactsPage.styled';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const ContactsPage = () => {
  return (
    <Div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Div>
  );
};

export default ContactsPage;
