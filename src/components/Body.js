import React from 'react';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import Skills from './Skills';

const Body = ({experienceListData,
                educationListData}) => {
        return (
                <section>
                        <section>
                                <ExperienceList experienceListData={experienceListData}/>
                        </section>
                        <section>
                                <Skills />
                                <EducationList educationListData={educationListData}/>
                        </section>
                </section>
        );            
}

export default Body;
