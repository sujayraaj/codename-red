import React from 'react';

import Education from './Education';

const EducationList = ({educationListData, className, theme}) => {
        return (
            <div className={theme.educationList}>
            <h3 className={theme.educationLabel}>Education</h3> 
            {
                educationListData.map(val=><Education theme={theme} {...val}/>)
            }
            </div>       
        );            
}

export default EducationList;
