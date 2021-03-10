import React from 'react';
import Button from './Button';
import Skill from './Skill';

const Skills = ({ skills, onAdd, showAdd }) => {
  return (
    <div className='education'>
      <div className='section'>
        <h4>Skills</h4>
        <div className='skill-strip'>
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
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

export default Skills;
