import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

import { useAddContactMutation, useGetAllContactsQuery } from 'redux/operation';

const LABEL_IDS = {
  nameId: nanoid(),
  numberId: nanoid(),
};

const { nameId, numberId } = LABEL_IDS;

const ContactForm = () => {
  const [addConatct] = useAddContactMutation();
  const { data } = useGetAllContactsQuery();

  const onFormSubmit = async e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (data.some(e => e.name === name)) {
      alert('this contact is allready exist, please add a new one');
      return;
    }

    try {
      await addConatct({ name, number });
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        className={css.input}
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        id={numberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
