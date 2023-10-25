import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/userOperations';
import { selectEmail } from 'redux/userSelectors';

const UserInfo = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);

  return (
    <>
      <li>
        <p>{email}</p>
      </li>
      <li>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </li>
    </>
  );
};

export default UserInfo;
