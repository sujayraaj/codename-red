import React from 'react';

import Role from './Role';

const Experience = ({
    organization,
    startDate,
    endDate,
    roles,
    className,
}) => {
        return (
            <article className={className}>
            <h4>{organization}</h4>
            <p><span>{startDate}</span> to <span>{endDate}</span></p>
            {
                roles.map(val=> <Role {...val}/>)
            }
    </article>        

        );            
}

export default Experience;
