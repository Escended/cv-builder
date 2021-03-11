import React from 'react';
import Button from './Button';
import Project from './Project';

const Projects = ({ projects, showAdd, onAdd }) => {
  return (
    <div className='education'>
      <div className='section'>
        <h4>Projects</h4>
        <div className='projects-container'>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Button
        color={showAdd ? 'pink' : 'lightgrey'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </div>
  );
};

export default Projects;
