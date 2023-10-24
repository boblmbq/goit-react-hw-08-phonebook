import { Field, Formik, } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/userOperations';
import {  StyledForm, StyledLabel } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm>
        <StyledLabel htmlFor="email">
          Email:
          <Field
            id="email"
            type="text"
            name="email"
            autoComplete="email"
          ></Field>
        </StyledLabel>

        <StyledLabel htmlFor="password">
          Password:
          <Field
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
          ></Field>
        </StyledLabel>
        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
