import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/userOperations';
import { StyledForm, StyledLabel } from './RegisterForm.styled';

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
      <StyledForm autoComplete="on">
        <StyledLabel htmlFor="name">
          Name:
          <Field id="name" type="text" name="name" autoComplete="on"></Field>
        </StyledLabel>

        <StyledLabel htmlFor="email">
          Email:
          <Field id="email" type="text" name="email" autoComplete="on"></Field>
        </StyledLabel>

        <StyledLabel htmlFor="password">
          Password:
          <Field
            id="password"
            type="password"
            name="password"
            autoComplete="on"
          ></Field>
        </StyledLabel>
        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
