import React from "react";
import Project from "./Project";

const PersonalProjects = ({ projectList, theme }) => (
  <article className={theme.personalProjects}>
    <h3 className={theme.personalProjectsLabel}>Personal Projects</h3>
    <div className={theme.projectList}>
    {projectList.map(val => <Project {...val} theme={theme}/>)}
    </div> 
  </article>
);
/* comments */

export default PersonalProjects;
