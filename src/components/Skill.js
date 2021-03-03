import React, { Component } from 'react';
import EditableText from './EditableText';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || 'Skill',
    };
  }
  render() {
    return (
      <div className='skill'>
        <EditableText
          name='name'
          text={this.state.name}
          placeholder='Skill'
          type='input'
        >
          <input
            className='skill'
            name='name'
            type='text'
            placeholder='Skill'
            value={this.state.name}
            onChange={this.props.handleChange.bind(this)}
          />
        </EditableText>
      </div>
    );
  }
}

export default Skill;
