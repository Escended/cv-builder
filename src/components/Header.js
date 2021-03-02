import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditableText from './EditableText';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      jobTitle: 'Software Developer',
      mobile: '07449777777',
      email: 'email@mail.co.uk',
      isEditing: false,
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

  handleOnclick() {}

  render() {
    const { firstName, lastName, jobTitle, mobile, email } = this.state;
    return (
      <div className='Header'>
        <EditableText
          name='first-name input-name'
          text={firstName}
          placeholder='First name'
          type='input'
        >
          <input
            className='first-name input-name'
            name='firstName'
            type='text'
            placeholder='First name'
            value={firstName}
            onChange={this.handleChange}
          />
        </EditableText>

        <EditableText
          name='last-name input-name'
          text={lastName}
          placeholder='Last name'
          type='input'
        >
          <input
            className='last-name input-name'
            size='50'
            name='lastName'
            type='text'
            placeholder='Last name'
            value={lastName}
            onChange={this.handleChange}
          />
        </EditableText>

        <EditableText
          name='job-title'
          text={jobTitle}
          placeholder='Job title'
          type='input'
        >
          <input
            className='job-title'
            name='jobTitle'
            type='text'
            placeholder='Job title'
            value={jobTitle}
            onChange={this.handleChange}
          />
        </EditableText>

        <div className='contact'>
          <FontAwesomeIcon icon='mobile' className='mobile-svg icon' />
          {/* <h5 className='mobile'>{mobile}</h5> */}

          <EditableText
            name='mobile'
            text={mobile}
            placeholder='07449493777'
            type='input'
          >
            <input
              className='mobile-input'
              name='mobile'
              type='text'
              placeholder='07449493777'
              value={mobile}
              onChange={this.handleChange}
            />
          </EditableText>
          <FontAwesomeIcon icon='envelope-open' className='mail-svg icon' />
          {/* <h5 className='email'>{email}</h5> */}
          <EditableText
            name='email'
            text={email}
            placeholder='07449493777'
            type='input'
          >
            <input
              className='email'
              name='email'
              type='text'
              placeholder='email@mail.co.uk'
              value={email}
              onChange={this.handleChange}
            />
          </EditableText>
        </div>
      </div>
    );
  }
}

export default Header;
