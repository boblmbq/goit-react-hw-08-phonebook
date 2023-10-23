import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { selectLogedIn } from 'redux/userSelectors';

const PublickRoute = ({ children, restricted = false, ...publickProps }) => {
  const isLogedIn = useSelector(selectLogedIn);
  const shouldRedirect = isLogedIn && restricted;

  return (
    <Route {...publickProps}>
      {shouldRedirect ? <Navigate to="/" /> : children} 
    </Route>
  );
};

export default PublickRoute;
