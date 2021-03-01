import React, { Component } from 'react';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faMobile, faEnvelopeOpen);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'First',
      lastName: 'Last',
      jobTitle: 'Software Developer',
      mobile: '07449493186',
      email: 'email@mail.co.uk',
    };
  }
  render() {
    return (
      <div>
        <Header details={this.state} />
      </div>
    );
  }
}
