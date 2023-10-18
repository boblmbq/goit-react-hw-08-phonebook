import { useDispatch } from 'react-redux';
import { logout } from 'redux/userOperations';

const UserInfo = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>email</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserInfo;
