import React from 'react';
import Nav from './../Nav/Nav';
import { NavLink } from 'react-router-dom';
import bassistImg from './../assets/bassist2.jpg';
import setPhoto from './../assets/setphoto.jpg';
import logo from '../assets/GENNOMADLOGO.png';


export default function Shows() {
  return (
    <section className="Shows">
      <Nav />
      <section>
        <div className="show-info">
          <NavLink to='/' className="navlink"><img src={logo} alt="Generation Nomad logo" className="logo" /></NavLink>
          <h3>Shows</h3>
          <p>Check back soon for our upcoming shows!</p>
        </div>
        <div className="right-align">
          <img src={setPhoto} alt='Generation Nomad set photo' className='pic1' />
        </div>
        <div className="right-align">
          <img src={bassistImg} alt='Generation Nomad Bassist' className='pic2' />
        </div>
        <h1>generation nomad</h1>
      </section>
    </section>
  )
}
