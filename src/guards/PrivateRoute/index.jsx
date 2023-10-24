import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLogedIn } from 'redux/userSelectors';

const PrivateRoute = ({ children }) => {
  const isLogedIn = useSelector(selectLogedIn);
  const location = useLocation();

  return isLogedIn ? (
    children
  ) : (
    <Navigate to="/login" replace={1} state={location} />
  );
};

export default PrivateRoute;
