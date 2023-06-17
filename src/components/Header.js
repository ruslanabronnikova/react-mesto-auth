import React from 'react';
import { useNavigate, Link, useMatch } from 'react-router-dom';
import logo from '../images/logo/logo.svg';

function Header({ email }) {
  const navigate = useNavigate();

  const mainMatch = useMatch('/main');
  const loginMatch = useMatch('/sign-in');
  const regMatch = useMatch('/sign-up');

  function handleOut() {
    localStorage.removeItem('jwt');
    navigate('/sign-in');
  }

  function handleLogin() {
    navigate('/sign-in');
  }

  function handleRegister() {
    navigate('/sign-up');
  }

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип Место" />
      <div className='heаder__info'>
        {mainMatch && (
          <>
            <p className="header__email">{email}</p>
            <Link to="/sign-in" className='header__link' onClick={handleOut}>
              Выйти
            </Link>
          </>
        )}

        {loginMatch && (
          <Link to="/sign-up" className='header__link' onClick={handleRegister}>
            Регистрация
          </Link>
        )}

        {regMatch && (
          <Link to="/sign-in" className='header__link' onClick={handleLogin}>
            Вход
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

