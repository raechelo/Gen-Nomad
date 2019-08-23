import React from 'react';
import { Link } from 'react-router-dom';
import bandPic from './../assets/gennomad-stage.jpg';

export default function NoMatch() {
  return (
    <section className="NoMatch">
      <div>
        <h3>Sorry! That page does not exist.</h3>
        <button className="back-btn"><Link to='/' className='back-btn-link'><i class="fas fa-arrow-left"></i> back</Link></button>
      </div>
      <img src={bandPic} alt='Generation Nomad band' />
      <h1>generation nomad</h1>
    </section>
  )
}
