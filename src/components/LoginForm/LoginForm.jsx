import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/userOperations';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(login(values));
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="emailLog">
          Email
          <Field
            id="emailLog"
            type="text"
            name="email"
            autoComplete="email"
          ></Field>
        </label>

        <label htmlFor="passwordLog">
          Password
          <Field
            id="passwordLog"
            type="password"
            name="password"
            autoComplete="current-password"
          ></Field>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
