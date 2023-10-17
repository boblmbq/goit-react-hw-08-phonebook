import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Div } from './App.styled';
import { ContactForm, Filter, ContactList } from 'components';
import LoginForm from 'components/LoginForm/LoginForm';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route
          index
          element={
            <Div>
              <h1>Phonebook</h1>
              <ContactForm />

              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </Div>
          }
        ></Route>
      </Route>
    </Routes>
  );
};
