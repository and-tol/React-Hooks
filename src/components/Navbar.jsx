// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className='navbar-brand'>Github search</div>
      <div className='navbar-nav'>
        <div className='nav-item'>
          <NavLink exact to='/' className='nav-link'>
            Главная
          </NavLink>
        </div>
        <div className='nav-item'>
          <NavLink to='/about' className='nav-link'>
            Информация
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
