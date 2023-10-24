import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useAddContactMutation, useGetAllContactsQuery } from 'redux/operation';
import { Field, Formik, Form } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

const LABEL_IDS = {
  nameId: nanoid(),
  numberId: nanoid(),
};

const { nameId, numberId } = LABEL_IDS;

const ContactForm = () => {
  const [addConatct] = useAddContactMutation();
  const { data } = useGetAllContactsQuery();

  const onFormSubmit = async (values, { resetForm }) => {
    if (data.some(e => e.name === values.name)) {
      alert('this contact is allready exist, please add a new one');
      return;
    }
    try {
      await addConatct({ ...values });
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
      <Form>
        <label htmlFor={nameId}>
          Name
          <Field
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></Field>
        </label>

        <label htmlFor={numberId}>
          Number
          <Field
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Field>
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
