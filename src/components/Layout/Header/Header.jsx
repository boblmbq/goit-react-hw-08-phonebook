import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import { LiAuthStyled, UlStyled } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectLoginTruth } from 'redux/userSelectors';

const Header = () => {
  const logedIn = useSelector(selectLoginTruth);

  return (
    <header>
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
    </header>
  );
};

export default Header;
