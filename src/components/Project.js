import React, { Component } from 'react';
import EditableText from './EditableText';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || 'Project Name',
      desc: props.desc || 'Project Description',
      tech: props.tech || 'Tech Stack',
    };
    // this.onChange = this.onChange.bind(this);
  }
  render() {
    const { name, desc, tech } = this.state;
    console.log(this.state.name);
    return (
      <div className='project'>
        <EditableText
          name='name'
          text={name}
          placeholder='Project Name'
          type='input'
        >
          <input
            className='name'
            name='name'
            type='text'
            placeholder='name'
            value={name}
            onChange={this.props.onChange.bind(this)}
          />
        </EditableText>
        <EditableText
          name='desc'
          text={desc}
          placeholder='Project Description'
          type='input'
        >
          <input
            className='desc'
            name='desc'
            type='textarea'
            placeholder='Description'
            value={desc}
            onChange={this.props.onChange.bind(this)}
          />
        </EditableText>
        <EditableText
          name='tech'
          text={tech}
          placeholder='Tech Stack'
          type='input'
        >
          <input
            className='tech'
            name='tech'
            type='text'
            placeholder='Tech Stack'
            value={tech}
            onChange={this.props.onChange.bind(this)}
          />
        </EditableText>
      </div>
    );
  }
}
