import React from 'react';

import Experience from './Experience';

const ExperienceList = ({experienceListData, className, theme}) => {
    return (
        <div className={theme.experienceList}>
            <h3 className={theme.experienceLabel} id="experience">Experience</h3> 
            {
                experienceListData.map(val=><Experience {...val} theme={theme} />)
            }
        </div>       
    );            
};

export default ExperienceList;
