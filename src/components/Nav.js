import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/Nav-style.css'

const Nav = () => {
  return (
    <nav className='lato-bold'>
      <h3><NavLink to='/'
        className={({ isActive }) => {
          return isActive ? "active-link" : "";
        }}
      >COCKTAIL APP</NavLink></h3>
      <ul>
        <li>
          <NavLink to='/'
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to='/About'
            className={({ isActive }) => { return isActive ? "active-link" : "" }}>About</NavLink>
        </li>
        <li>
          <NavLink to='/Products'
            className={({ isActive }) => { return isActive ? "active-link" : "" }}>Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;