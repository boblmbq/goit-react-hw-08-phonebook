import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import { HeaderStyled, LiAuthStyled, UlStyled } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectLogedIn } from 'redux/userSelectors';

const Header = () => {
  const logedIn = useSelector(selectLogedIn);

  return (
    <HeaderStyled>
      <nav>
        <UlStyled>
          <li>
            <Link to="/">Cotnacts</Link>
          </li>

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
