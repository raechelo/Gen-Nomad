import React from 'react';
import Nav from './../Nav/Nav';
import { NavLink } from 'react-router-dom';
import logo from '../assets/GENNOMADLOGO.png';


export default function Shows() {
  return (
    <section className="Shows">
      <Nav />
      <section>
        <div>
          <NavLink to='/' className="navlink"><img src={logo} alt="Generation Nomad logo" /></NavLink>
          <h3>Shows</h3>
          <p>Check back soon for our upcoming shows!</p>
        </div>
        <h1>generation nomad</h1>
      </section>
    </section>
  )
}
