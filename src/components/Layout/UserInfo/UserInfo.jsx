import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/userOperations';
import { selectName } from 'redux/userSelectors';

const UserInfo = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <>
      <li>
        <p>{name}</p>
      </li>
      <li>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </li>
    </>
  );
};

export default UserInfo;
