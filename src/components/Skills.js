import React from 'react';
import Section from './Section';

import SkillsPieChart from './SkillsPieChart';

const Skills = ({skillsPieChart,theme}) => {
    return <Section className={theme.skills}><SkillsPieChart skillsPieChart={skillsPieChart} theme={theme}/></Section>;            
};

export default Skills;
