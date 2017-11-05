import React from "react";
import Project from "./Project";

const PersonalProjects = ({ projectList, theme }) => (
  <article className={theme.personalProjects}>
    <h3 className={theme.personalProjectsLabel}>Personal Projects</h3>
    {projectList.map(val => <Project {...val} theme={theme}/>)}
  </article>
);

export default PersonalProjects;
