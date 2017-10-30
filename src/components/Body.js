import React from 'react';
import ExperienceList from './ExperienceList';

const Body = ({experienceListData}) => {
        console.log('BODY',experienceListData)
        return (
                <section>
                        <section>
                                <ExperienceList experienceListData={experienceListData}/>
                                </section>
                        <section>
                        </section>
                </section>
        );            
}

export default Body;
