import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/userOperations';

export const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="on">
        <label htmlFor="name">
          Name
          <Field id="name" type="text" name="name" autoComplete="on"></Field>
        </label>

        <label htmlFor="email">
          Email
          <Field
            id="email"
            type="text"
            name="email"
            autoComplete="on"
          ></Field>
        </label>

        <label htmlFor="password">
          Password
          <Field
            id="password"
            type="password"
            name="password"
            autoComplete="on"
          ></Field>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
