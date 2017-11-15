import React from 'react';

import Role from './Role';

const Experience = ({
    organization,
    startDate,
    endDate,
    roles,
    className,
    theme,
}) => {
    return (
        <article className={theme.experienceItem}>
            <h4 className={theme.organization}>{organization}</h4>
            <p className={theme.experienceDate}><span className={theme.startDate}>{startDate}</span> to <span className={theme.endDate}>{endDate}</span></p>
            {
                roles.map(val=> <Role theme={theme} {...val}/>)
            }
        </article>        

    );            
};

export default Experience;
