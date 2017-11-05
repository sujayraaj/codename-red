import React from 'react';

import './ExperienceList.css';
import Experience from './Experience';

const ExperienceList = ({experienceListData, className}) => {
        return (
            <div className={className}>
            <h3 className="box-shadow">Experience</h3> 
            {
                experienceListData.map(val=><Experience {...val} className="box-shadow margin-bottom"/>)
            }
            </div>       
        );            
}

export default ExperienceList;
