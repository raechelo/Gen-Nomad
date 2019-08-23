import React from 'react';
import bandPic from '../assets/gennomad.jpg';
import logo from '../assets/GENNOMADLOGO.png';
import { NavLink } from 'react-router-dom';


export default function Home() {
  return (
    <section className="Home">
      <nav className="Home-Nav">
        <NavLink to='/' className="navlink"><img src={logo} alt="Generation Nomad logo" /></NavLink>
        <NavLink to='/listen' className="navlink"><h3>Listen</h3></NavLink>
        <NavLink to='/shows' className="navlink"><h3>Shows</h3></NavLink>
        <NavLink to='/press' className="navlink"><h3>Press</h3></NavLink>
        <NavLink to='/about' className="navlink"><h3>About</h3></NavLink>
        <NavLink to='/contact' className="navlink"><h3>Contact</h3></NavLink>
      </nav>
      <img src={bandPic} alt="Generation Nomad band" />
      <h1>generation nomad</h1>
    </section>
  )
}
