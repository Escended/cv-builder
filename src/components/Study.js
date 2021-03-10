import React from 'react';

const Study = ({ study }) => {
  return (
    <div className='study-strip'>
      <h4>{study.school}</h4>
      <p>{study.qualification}</p>
      <p>{study.grade}</p>
      <p>{study.date}</p>
    </div>
  );
};

export default Study;
