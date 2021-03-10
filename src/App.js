import Header from './components/Header';
import Education from './components/Education';
import AddEducation from './components/AddEducation';
import AddSkill from './components/AddSkill';
import Skills from './components/Skills';
import { useState } from 'react';

function App() {
  const [showAddStudy, setShowAddStudy] = useState(false);
  const [showAddSkill, setShowAddSkill] = useState(false);

  const [education, setEducation] = useState([
    {
      id: 1,
      school: 'School',
      qualification: 'GCSE',
      grade: '10 A-Cs',
      date: '2012',
    },
  ]);
  const [skills, setSkills] = useState([
    {
      id: 1,
      skill: 'Data Structures',
    },
  ]);

  const addStudy = (study) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newStudy = { id, ...study };
    setEducation([...education, newStudy]);
  };

  const addSkill = (skill) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newSkill = { id, ...skill };
    setSkills([...skills, newSkill]);
  };

  return (
    <div className='App'>
      <Header />
      {showAddStudy && <AddEducation onAdd={addStudy} />}
      <Education
        education={education}
        onAdd={() => {
          setShowAddStudy(!showAddStudy);
          showAddSkill && setShowAddSkill(!showAddSkill);
        }}
        showAdd={showAddStudy}
      />
      {showAddSkill && <AddSkill onAdd={addSkill} />}
      <Skills
        skills={skills}
        onAdd={() => {
          setShowAddSkill(!showAddSkill);
          showAddStudy && setShowAddStudy(!showAddStudy);
        }}
        showAdd={showAddSkill}
      />
    </div>
  );
}

export default App;
