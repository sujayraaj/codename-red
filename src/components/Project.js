import React from "react";

const Project = ({ title, description, url }) => (
  <div>
    <h4>{title}</h4>
    <p>{description}</p>
    <a href={url}>Go To Project</a>
  </div>
);

export default Project;
