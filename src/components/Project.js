import React from "react";

const Project = ({ title, description, url, theme }) => (
  <div>
    <h4 className={theme.projectTitle}>{title}</h4>
    <p className={theme.projectDescription}>{description}</p>
    <a className={theme.projectURL} href={url}>Go To Project</a>
  </div>
);

export default Project;
