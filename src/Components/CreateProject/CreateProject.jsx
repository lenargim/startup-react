import React from 'react';
import HeaderCreateProject from "../Common/HeaderCreateProject/HeaderCreateProject";
import s from './CreateProject.module.sass'
import ProjectForm from "./ProjectForm/ProjectForm";

const CreateProject = () => {
  return (
    <div>
      <HeaderCreateProject/>
      <main className={s.createProject}>
        <div className="container">
          <ProjectForm />
        </div>
      </main>
    </div>
  );
};

export default CreateProject;