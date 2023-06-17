import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo/logo.svg';

function Header({ email, main, login, reg }) {
  const navigate = useNavigate();

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
      <div className='heder__info'>
        {main && (
          <>
            <p className="header__email">{email}</p>
            <Link to="/sign-in" className='header__link' onClick={handleOut}>
              Выйти
            </Link>
          </>
        )}

        {login && (
          <Link to="/sign-up" className='header__link' onClick={handleRegister}>
            Регистрация
          </Link>
        )}

        {reg && (
          <Link to="/sign-in" className='header__link' onClick={handleLogin}>
            Вход
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
