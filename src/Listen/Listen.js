import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './../Nav/Nav';
import bandPic from './../assets/GENNOMAD2.jpeg';
import guitarPic from './../assets/gennomad-guitar.jpg';
import logo from '../assets/GENNOMADLOGO.png';
import spotifyLogo from './../assets/logos/spotify.svg';
import ReactTooltip from 'react-tooltip';
import soundcloudLogo from './../assets/logos/soundcloud.svg';
import youtubeLogo from './../assets/logos/youtube.svg';
import appleLogo from './../assets/logos/apple.svg';
import playstoreLogo from './../assets/logos/playstore.svg';


export default function Listen() {
  return (
    <section className="Listen">
      <Nav />
      <section>
        <NavLink to='/' className="navlink"><img src={logo} alt="Generation Nomad logo" className="logo"  /></NavLink>
        <div className="listen-column">
          <div className="listen-row">
            <a href="https://open.spotify.com/artist/4MaisRJo6Z8VaLH382HvMj?si=YUZu_3E3RSOIQLDrZAZReA" alt="listen to Generation Nomad on Spotify" target="blank">
              <img src={spotifyLogo} alt="Generation Nomad on Spotify" className="listen-logo" data-tip data-for="spotify-tip" />
            </a>
            <ReactTooltip id='spotify-tip' effect="float" place="top" className="modal-tooltip">Listen on Spotify</ReactTooltip>
            <a href="https://music.apple.com/us/album/wash-away-ep/1378025440" alt="Listen to Generation Nomad on iTunes" target="blank">
              <img src={appleLogo} alt="Generation Nomad on iTunes" className="listen-logo" data-tip data-for="apple-tip" />
            </a>
            <ReactTooltip id='apple-tip' effect="float" place="top" className="modal-tooltip">Listen on iTunes</ReactTooltip>
            <a href="https://play.google.com/store/music/album/Generation_Nomad_Wash_Away_EP?id=Bkibagtt4fnvcsq4bzkzwb4yip4&hl=en" alt="Listen to Generation Nomad on Google Play" target="blank">
              <img src={playstoreLogo} alt="Generation Nomad on Google Play" className="listen-logo" data-tip data-for="playstore-tip" />
            </a>
            <ReactTooltip id='playstore-tip' effect="float" place="top" className="modal-tooltip">Listen on Google Play</ReactTooltip>
            <a href="https://soundcloud.com/generation-nomad" alt="Listen to Generation Nomad on SoundCloud" target="blank">
              <img src={soundcloudLogo} alt="Generation Nomad on SoundCloud" className="listen-logo" data-tip data-for="soundcloud-tip" />
            </a>
            <ReactTooltip id='soundcloud-tip' effect="float" place="top" className="modal-tooltip">Listen on Soundcloud</ReactTooltip>
            <a href="https://www.youtube.com/channel/UCR1Lt139AWuf2iRyG7QJq8A" alt="Listen to Generation Nomad on YouTube" target="blank">
              <img src={youtubeLogo} alt="Generation Nomad on YouTube" className="listen-logo" data-tip data-for="youtube-tip" />
            </a>
            <ReactTooltip id='youtube-tip' effect="float" place="top" className="modal-tooltip">Listen on Youtube</ReactTooltip>
          </div>
          <div className="music-player">
            <iframe src="https://open.spotify.com/embed/artist/4MaisRJo6Z8VaLH382HvMj" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Listen to Generation Nomad on Spotify now"></iframe>
          </div>
        </div>
        <div className="align-right div-pic1">
          <img src={bandPic} alt="Generation Nomad in studio" className="pic1" />
        </div>
        <div className="align-right div-pic2">
          <img src={guitarPic} alt="Generation Nomad Guitarist, Samuel L. Jackson" className="pic2" />
        </div>
        <h1>generation nomad</h1>
      </section>
    </section>
  )
}
