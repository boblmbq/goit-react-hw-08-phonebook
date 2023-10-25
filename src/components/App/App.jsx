import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserByPersistedToken } from 'redux/userOperations';

import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublickRoute';

const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const Layout = lazy(() => import('../Layout'));
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
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterForm />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginForm />
              </PublicRoute>
            }
          />

          <Route
            index
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
