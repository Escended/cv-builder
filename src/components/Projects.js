import React, { Component } from 'react';
import Project from './Project';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      desc: '',
      tech: '',
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, desc, tech } = this.state;
    return (
      <div className='section-title'>
        <h3>Projects</h3>
        <Project
          name={name}
          desc={desc}
          tech={tech}
          onChange={this.handleChange}
        />
        <Project
          name={name}
          desc={desc}
          tech={tech}
          onChange={this.handleChange}
        />
        <Project
          name={name}
          desc={desc}
          tech={tech}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
