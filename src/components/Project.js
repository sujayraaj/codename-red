import React from 'react';

const Project = ({ title, description, url, theme }) => (
    <div className={theme.project}>
        <h4 className={theme.projectTitle}><a href={url} className={theme.projectURL}>{title}</a></h4>
        <p className={theme.projectDescription}>{description}</p>
    </div>
);

export default Project;
