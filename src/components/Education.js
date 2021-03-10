// import React, { useState, useEffect } from 'react';
import Button from './Button';
import Study from './Study';
const Education = ({ education, onAdd, showAdd }) => {
  return (
    <div className='education'>
      <div className='section'>
        <h4>Education</h4>
        {education.map((study) => (
          <Study key={study.id} study={study} />
        ))}
      </div>
      <Button
        color={showAdd ? 'pink' : 'lightgrey'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </div>
  );
};

export default Education;
