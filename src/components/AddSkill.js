import React, { useState } from 'react';

const AddSkill = ({ onAdd }) => {
  const [skill, setSkill] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!skill) {
      alert('Please fill out the skill!');
      return;
    }
    onAdd({ skill });
    setSkill('');
  };

  return (
    <form className='edu-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Skill</label>
        <input
          type='text'
          placeholder='Skill'
          name='skill'
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        />
      </div>
      <input className='btn1 btn1-block' type='submit' value='Submit' />
    </form>
  );
};

export default AddSkill;
