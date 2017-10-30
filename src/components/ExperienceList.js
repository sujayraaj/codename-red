import React from 'react';

import Experience from './Experience';

const ExperienceList = ({experienceListData}) => {
    console.log('EXPLIST',experienceListData);
        return (
            <div>
            <h3>Experience</h3> 
            {
                experienceListData.map(val=><Experience {...val}/>)
            }
            </div>       
        );            
}

export default ExperienceList;
