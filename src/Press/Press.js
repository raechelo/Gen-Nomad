import React from 'react'
import Nav from './../Nav/Nav';
import logo from '../assets/GENNOMADLOGO.png';
import { NavLink } from 'react-router-dom';
import swallowHillLogo from './../assets/swallowhill.png';
import lizzyHeadshot from './../assets/lizzy-headshot2.jpg';
import single from './../assets/single-gennomad.jpg';
import bassist from './../assets/bassist-setphoto.jpg';

export default function Press() {
  return (
    <section className="Press">
      <Nav />
      <section>
        <NavLink to='/' className="navlink logo"><img src={logo} alt="Generation Nomad logo"  /></NavLink>
        <div className="center-podcast-logo">
          <a href="https://hwcdn.libsyn.com/p/8/0/4/80426234aac139dd/Front_Row_Podcast_-_Episode_40_-_Pete_Henriksen_and_Generation_Nomad.mp3?c_id=21269616&cs_id=21269616&expiration=1566926121&hwt=e1f611ff3dbf8c309a31af0ff70f63cd" alt="Listen to Generation Nomad on Swallow Hill Music's Front Row Podcast" target="blank">
            <img src={swallowHillLogo} alt="Swallow Hill Music logo" className="podcast-logo" />
          </a>
          <div className="inline-header">
            <h4>Swallow Hill Music - Front Row Podcast</h4>
            <h4>May 29, 2018</h4>
          </div>
        </div>
        <div className="align-right">
          <img src={lizzyHeadshot} alt="Generation Nomad singer, Lizzy Kistler" className="pic1" />
          <img src={bassist} alt="Generation Nomad bassist, Gizzy Cisneros" className="pic3" />
        </div>
        <div className="pics-div">
          <img src={single} alt="Generation Nomad single, Wish You Were Her" className="pic2" />
        </div>
        <div className="align-right">
        </div>
        <h1>generation nomad</h1>
      </section>
    </section>
  )
}
