import React, { Component } from 'react';
import Skill from './Skill';
export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    return (
      <div className='section-title'>
        <h3>Skills</h3>
        <div className='skills'>
          <Skill name={this.state.name} handleChange={this.handleChange} />
          <Skill name={this.state.name} handleChange={this.handleChange} />
          <Skill name={this.state.name} handleChange={this.handleChange} />
          <Skill name={this.state.name} handleChange={this.handleChange} />
          <Skill name={this.state.name} handleChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
