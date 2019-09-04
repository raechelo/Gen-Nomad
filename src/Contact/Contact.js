import React,  { Component } from 'react';
import Nav from './../Nav/Nav';
import logo from '../assets/GENNOMADLOGO.png';
import { NavLink } from 'react-router-dom';
import facebookLogo from './../assets/logos/facebook.svg';
import gmailLogo from './../assets/logos/gmail.svg';
import instagramLogo from './../assets/logos/instagram.svg';
import twitterLogo from './../assets/logos/twitter.svg';

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleClick = e => {
    e.preventDefault();
    let option = {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.messsge
      })
    }
    fetch('https://gennomad-be.herokuapp.com/send', option)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  handleChange = (e, name) => {
    let value = e.target.value;
    this.setState({name: value});
  }

  render() {
    return (
      <section className="Contact">
        <Nav />
        <section>
          <NavLink to='/' className="navlink logo" ><img src={logo} alt="Generation Nomad logo" /></NavLink>
          <form onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleClick(e)}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" />
            <label htmlFor="email">email</label>
            <input type="text" id="email" />
            <label htmlFor="msg">message</label>
            <textarea type="text" id="msg" className="msg" rows="5" cols="25" placeholder='your message here...'>
            </textarea>
            <button>send</button>
          </form>
          <section className="social">
            <a href="https://www.facebook.com/generationnomadband/" alt="Generation Nomad on Facebook" className="fb" target="blank">
              <img src={facebookLogo} alt="Generation Nomad on Facebook" />
            </a>
            <a href="https://www.instagram.com/gennomad/" alt="Generation Nomad on Instagram" className="insta" target="blank">
              <img src={instagramLogo} alt="Generation Nomad on Instagram" />
            </a>
            <a href="https://twitter.com/gennomad/" alt="Generation Nomad on Twitter" className="twit" target="blank">
              <img src={twitterLogo} alt="Generation Nomad on Twitter" />
            </a>
            <a href="mailto:gennomad@gmail.com" alt="email Generation Nomad" className="gmail" target="blank">
              <img src={gmailLogo} alt="Generation Nomad on Gmail" />
            </a>
          </section>
          <h1>generation nomad</h1>
        </section>
      </section>
    )
  }
}

export default Contact;