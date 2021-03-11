import React, { useState } from 'react';

const AddProject = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc) {
      alert('Please fill out every box');
    }
    onAdd({ name, description: desc });
    setName('');
    setDesc('');
  };

  return (
    <form className='edu-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Project name'
          name='project name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label>Name</label>
        <textarea
          type='text'
          placeholder='Describe your project'
          name='description'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
      <input className='btn1 btn1-block' type='submit' value='Submit' />
    </form>
  );
};

export default AddProject;
