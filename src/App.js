import React, { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faMobile, faEnvelopeOpen);
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Education />
        <Skills />
        <Projects />
        <Experience />
      </div>
    );
  }
}
