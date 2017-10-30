import React from 'react';

import Education from './Education';

const EducationList = ({educationListData}) => {
    console.log('EDUCATION',educationListData)
        return (
            <div>
            <h3>Education</h3> 
            {
                educationListData.map(val=><Education {...val}/>)
            }
            </div>       
        );            
}

export default EducationList;
