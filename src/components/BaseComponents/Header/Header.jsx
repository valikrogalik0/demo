import React from 'react'
import PropTypes from 'prop-types';
import './styles/Header.styles.css';

const Header = props => {
  function onClickExit() {
    const { logout } = props;

    logout();
  }

  return (
    <div className='main-header'>
      <div className='main-header__logo'>CloneDesk</div>
      <button onClick={onClickExit} className='main-header__exit-button'>Exit</button>
    </div>
  )
};

Header.propTypes = {
  logout: PropTypes.func,
};

export default Header;