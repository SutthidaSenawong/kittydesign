import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const activeStyles = {
    fontWeight: 'bold',
    // textDecoration: 'underline',
    color: 'pink',
  };

  return (
    <header>
      <NavLink to="/" className="site-logo">
        <img src="kitty-logo.png" className="img-logo" />
      </NavLink>
      <nav>
        <NavLink
          to="/about"
          onClick={() => setActive('About')}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/pricing"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/project"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          My Project
        </NavLink>
      </nav>
    </header>
  );
}
