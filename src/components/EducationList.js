import React from 'react';

import Education from './Education';

const EducationList = ({educationListData, className}) => {
        return (
            <div className={className}>
            <h3>Education</h3> 
            {
                educationListData.map(val=><Education {...val}/>)
            }
            </div>       
        );            
}

export default EducationList;
