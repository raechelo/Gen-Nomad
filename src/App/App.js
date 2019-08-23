import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../Home/Home';
import Nav from './../Nav/Nav';
import Shows from './../Shows/Shows';
import Music from  './../Music/Music';
import Contact from './../Contact/Contact';
import Press from './../Press/Press';
import About from './../About/About';
import NoMatch from './../NoMatch/NoMatch';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shows' component={Shows} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/press' component={Press} />
          <Route exact path='/about' component={About} />
          <Route component={NoMatch} />
        </Switch>
      </section>
    );
  }
}

export default App;
