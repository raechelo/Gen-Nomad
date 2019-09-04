import React from 'react'
import Nav from './../Nav/Nav';
import logo from '../assets/GENNOMADLOGO.png';
import { NavLink } from 'react-router-dom';
import lizzy from './../assets/LIZZY-HEADSHOT.jpg';
import gizzy from './../assets/BASSIST-HEADSHOT.jpg';
import luke from './../assets/GUITAR-HEADSHOT.jpg';
import josh from './../assets/DRUMMER-HEADSHOT.jpg';
import band from './../assets/gennomad-stage.jpg';


export default function About() {
  return (
    <section className="About">
      <Nav />
      <section>
        <NavLink to='/' className="navlink logo"><img src={logo} alt="Generation Nomad logo" /></NavLink>
        <div className="band-info">
          <img src={band} alt="Generation Nomad on Stage" className="header-pic" />
            <p className="info">With classic influences such as Prince and The Smiths to newer and more unfamiliar artists such as Catfish and the Bottlemen, Night Terrors of 1927, The Griswolds, Alter Bridge, KITTEN and The Hunna, we write original songs and makes covers of those we wish we had. Come to one of our shows and you're sure to hear a song you know, but you'll also discover some you never have.
            We all inspire each other to be the best musicians we can be and push each other to our limits. We all put their ideas together to create the sound we all want.We like to get paid, everyone does, but really we just want people to listen to our music and come to our shows. In fact, we love playing free shows so even our friends who are hard on cash don't have to break the bank. Making connections with other people is one of our favorite parts of making music, so come find us at any of our shows. We love making new friends. <span>Generation Nomad isn’t a band who is going to settle for <span>good enough</span>, we want to blow your mind.</span></p>
        </div>
        <div className="members">
          <div className="align-left one">
            <img src={lizzy} alt="Generation Nomad lead vocalist, Lizzy Kistler" />
            <h4>Lizzy Kistler, Vocals/Guitar</h4>
            <p>Lizzy plays many instruments such as saxophone, trumpet and drums which she plans to bring to the spotlight soon. She is a double major at the University of Colorado Denver for Music Business and Film and TV. Outside these responsibilities, she loves going to support other local and touring bands, and making new friends at those shows as well as Generation Nomad's.</p>
          </div>
          <div className="align-right two">
            <img src={luke} alt="Generation Nomad lead guitar, Luke Sletten" />
            <h4>Luke Sletten, Lead Guitar</h4>
            <p>Luke has tons of skill. He's still in high school but his goal to attend Berklee's school of music. We are sure he can achieve this, but there's no doubt we'll miss him when he's gone. Luke and Lizzy met through a mutual friend, Marco, who used to play guitar and bass for Generation Nomad.</p>
          </div>
          <div className="align-left three">
            <img src={josh} alt="Generation Nomad drummer, Josh Tibbets" />
            <h4>Josh Tibbets, Drums</h4>
            <p>Josh is studying Recording Arts at the University of Colorado Denver. In other words, his entire life revolves around music. One of his all time favorite artists is Chukwudi Hodge, the drummer for Watsky. Josh and Lizzy met in the New Electronics Orchestra ensemble at UCD where Josh played percussion, and Lizzy played Bass.</p>
          </div>
          <div className="align-right four">
            <img src={gizzy} alt="Generation Nomad bassist, Gizzy Cisneros" />
            <h4>Gizzy Cisneros, Bass/Vocals</h4>
            <p>Gizzy comes from the small town Jackson Hole, Wyoming, where she loves to climb and be in the outdoors. Gizzy and Lizzy met by chance at one of the orientations for Freshman at UCD. They are very close friends, and love to jam together on other instruments.</p>
          </div>
        </div>
        <h1>generation nomad</h1>
      </section>
    </section>
  )
}
