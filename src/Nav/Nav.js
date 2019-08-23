import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav">
      <NavLink to='/listen' className="navlink"><h3>Listen</h3></NavLink>
      <NavLink to='/shows' className="navlink"><h3>Shows</h3></NavLink>
      <NavLink to='/press' className="navlink"><h3>Press</h3></NavLink>
      <NavLink to='/about' className="navlink"><h3>About</h3></NavLink>
      <NavLink to='/contact' className="navlink"><h3>Contact</h3></NavLink>
    </nav>
  )
}
