import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import { HeaderStyled, LiAuthStyled, UlStyled } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectLogedIn, selectName } from 'redux/userSelectors';

const Header = () => {
  const logedIn = useSelector(selectLogedIn);
  const name = useSelector(selectName);

  return (
    <HeaderStyled>
      <nav>
        <UlStyled logedIn={logedIn}>
          {logedIn && (
            <li>
              <p>
                Welcome <b>{name}</b>!
              </p>
            </li>
          )}

          <LiAuthStyled>
            {logedIn ? (
              <UserInfo />
            ) : (
              <>
                <Link to="/register">Registeration</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </LiAuthStyled>
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
