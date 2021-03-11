import Header from './components/Header';
import Education from './components/Education';
import AddEducation from './components/AddEducation';
import AddSkill from './components/AddSkill';
import AddProject from './components/AddProject';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState } from 'react';

function App() {
  const [showAddStudy, setShowAddStudy] = useState(false);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);

  const [education, setEducation] = useState([
    {
      id: 1,
      school: 'School',
      qualification: 'GCSE',
      grade: '10 A-Cs',
      date: '2012',
    },
  ]);

  // Skills array
  const [skills, setSkills] = useState([
    {
      id: 1,
      skill: 'Data Structures',
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project 1',
      description: 'Built a CV builder application using React',
    },
  ]);

  const makeID = () => {
    return Math.floor(Math.random() * 10000) + 1;
  };

  const addStudy = (study) => {
    const id = makeID();
    console.log(id);
    const newStudy = { id, ...study };
    setEducation([...education, newStudy]);
  };

  const addSkill = (skill) => {
    const id = makeID();
    const newSkill = { id, ...skill };
    setSkills([...skills, newSkill]);
  };

  const addProject = (project) => {
    const id = makeID();
    const newProject = { id, ...project };
    setProjects([...projects, newProject]);
  };

  return (
    <div className='App'>
      <Header />
      {showAddStudy && <AddEducation onAdd={addStudy} />}
      {showAddSkill && <AddSkill onAdd={addSkill} />}

      {showAddProject && <AddProject onAdd={addProject} />}

      <Education
        education={education}
        onAdd={() => {
          setShowAddStudy(!showAddStudy);
          console.log(`${showAddSkill}, ${showAddProject}, ${showAddStudy}`);
          if (!showAddStudy) {
            setShowAddSkill(false);
            setShowAddProject(false);
          }
        }}
        showAdd={showAddStudy}
      />
      <Skills
        skills={skills}
        onAdd={() => {
          setShowAddSkill(!showAddSkill);
          if (!showAddSkill) {
            setShowAddStudy(false);
            setShowAddProject(false);
          }
        }}
        showAdd={showAddSkill}
      />
      <Projects
        projects={projects}
        onAdd={() => {
          setShowAddProject(!showAddProject);
          if (!showAddProject) {
            setShowAddStudy(false);
            setShowAddSkill(false);
          }
        }}
        showAdd={showAddProject}
      />
    </div>
  );
}

export default App;
