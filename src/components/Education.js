import React from 'react';

const Education = ({institute,
                location,
                degree,
                stream,
                year,
            theme}) => {
        return (
            <div classNAme={theme.educationItem}>
                <h5 className={theme.instituteAndLocation}><span className={theme.institute}>{institute}</span>
                <span className={theme.location}>{location}</span></h5>
                <p className={theme.educationDetails}>
                <span className={theme.educationDegree}>{degree}</span>
                <span className={theme.educationStream}>{stream}</span>
                <span className={theme.graduationYear}>{year}</span>
                </p>
            </div>
        );            
}

export default Education;
