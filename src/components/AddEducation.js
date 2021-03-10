import React, { useState } from 'react';

const AddEducation = ({ onAdd }) => {
  const [school, setSchool] = useState('');
  const [qualification, setQualification] = useState('');
  const [grade, setGrade] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!school) {
      alert('Please add School name');
      return;
    }

    onAdd({ school, qualification, grade, date });
    setSchool('');
    setQualification('');
    setGrade('');
    setDate('');
  };
  return (
    <form className='edu-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>School</label>
        <input
          type='text'
          placeholder='School name'
          name='school'
          value={school}
          onChange={(e) => {
            setSchool(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label>Qualification</label>
        <input
          type='text'
          placeholder='BSc/GCSE...'
          name='qualification'
          value={qualification}
          onChange={(e) => {
            setQualification(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label>Grade</label>
        <input
          type='text'
          placeholder=''
          name='grade'
          value={grade}
          onChange={(e) => {
            setGrade(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input
          type='text'
          placeholder='Date'
          name='date'
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>

      <input className='btn1 btn1-block' type='submit' value='Submit' />
    </form>
  );
};

export default AddEducation;
