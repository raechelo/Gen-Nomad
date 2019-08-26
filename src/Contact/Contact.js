import React from 'react';
import Nav from './../Nav/Nav';
import logo from '../assets/GENNOMADLOGO.png';
import { NavLink } from 'react-router-dom';
import facebookLogo from './../assets/logos/facebook.svg';
import gmailLogo from './../assets/logos/gmail.svg';
import instagramLogo from './../assets/logos/instagram.svg';
import twitterLogo from './../assets/logos/twitter.svg';

export default function Contact() {
  return (
    <section className="Contact">
      <Nav />
      <section>
        <NavLink to='/' className="navlink" className="logo" ><img src={logo} alt="Generation Nomad logo" /></NavLink>
        <form>
          <label for="name">name</label>
          <input type="text" id="name" />
          <label for="email">email</label>
          <input type="text" id="email" />
          <label for="msg">message</label>
          <textarea type="text" id="msg" className="msg" rows="5" cols="25">
            your message here...
          </textarea>
          <button>send</button>
        </form>
        <section className="social">
          <a href="https://www.facebook.com/generationnomadband/" alt="Generation Nomad on Facebook" class="fb">
            <img src={facebookLogo} alt="Generation Nomad on Facebook" />
          </a>
          <a href="https://www.instagram.com/gennomad/" alt="Generation Nomad on Instagram" class="insta">
            <img src={instagramLogo} alt="Generation Nomad on Instagram" />
          </a>
          <a href="https://twitter.com/gennomad/" alt="Generation Nomad on Twitter" class="twit">
            <img src={twitterLogo} alt="Generation Nomad on Twitter" />
          </a>
          <a href="" alt="" class="gmail">
            <img src={gmailLogo} alt="Generation Nomad on Gmail" />
          </a>
        </section>
        <h1>generation nomad</h1>
      </section>
    </section>
  )
}
