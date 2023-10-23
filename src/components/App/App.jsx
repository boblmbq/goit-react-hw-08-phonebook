import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserByPersistedToken } from 'redux/userOperations';

import { Div } from './App.styled';

const Layout = lazy(() => import('../Layout'));
const ContactForm = lazy(() => import('../ContactForm'));
const Filter = lazy(() => import('../Filter'));
const ContactList = lazy(() => import('../ContactList'));
const LoginForm = lazy(() => import('../LoginForm'));
const RegisterForm = lazy(() => import('../RegisterForm'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByPersistedToken());
  }, [dispatch]);

  return (
    <Suspense fallback={'loading'}>
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
    </Suspense> 
  );
};
