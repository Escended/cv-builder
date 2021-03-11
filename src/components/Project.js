import React from 'react';

const Project = ({ project }) => {
  return (
    <div className='project-item'>
      <h5>{project.name}</h5>
      <p style={{ fontSize: 11 }}>{project.description}</p>
    </div>
  );
};

export default Project;
