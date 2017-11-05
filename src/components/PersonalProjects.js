import React from "react";
import Project from "./Project";

const PersonalProjects = ({ projectList, className }) => (
  <article className={className}>
    <h3 className="box-shadow">Personal Projects</h3>
    {projectList.map(val => <Project {...val} />)}
  </article>
);

export default PersonalProjects;
