import React, { Component } from 'react';
import EditableText from './EditableText';

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      degree: 'Degree',
      school: 'School',
      date: 'Date',
      grade: 'Grade',
    };
    this.handleChange = this.handleChange.bind(this);
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
    const { degree, school, date, grade } = this.state;
    return (
      <div className='section-title'>
        <h3>Education</h3>
        <EditableText name='date' text={date} placeholder='date' type='input'>
          <input
            className='date'
            name='date'
            type='text'
            placeholder='date'
            value={date}
            onChange={this.handleChange}
          />
        </EditableText>
        <div className='school-degree'>
          <EditableText
            name='degree'
            text={degree}
            placeholder='Degree'
            type='input'
          >
            <input
              className='degree'
              name='degree'
              type='text'
              placeholder='Degree'
              value={degree}
              onChange={this.handleChange}
            />
          </EditableText>
          <EditableText
            name='grade'
            text={grade}
            placeholder='grade'
            type='input'
          >
            <input
              className=''
              name='grade'
              type='text'
              placeholder='grade'
              value={grade}
              onChange={this.handleChange}
            />
          </EditableText>
          <EditableText
            name='school'
            text={school}
            placeholder='school'
            type='input'
          >
            <input
              className='school'
              name='school'
              type='text'
              placeholder='school'
              value={school}
              onChange={this.handleChange}
            />
          </EditableText>
        </div>
      </div>
    );
  }
}
