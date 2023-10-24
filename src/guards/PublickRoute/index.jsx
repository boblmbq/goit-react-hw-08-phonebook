import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLogedIn } from 'redux/userSelectors';

const PublicRoute = ({ children }) => {
  const isLogedIn = useSelector(selectLogedIn);
  const location = useLocation();
  return !isLogedIn ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
