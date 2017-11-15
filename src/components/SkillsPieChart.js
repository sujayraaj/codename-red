import React from 'react';
import Section from './Section';
import PieChart from './PieChart';

export const SkillsPieChart = ({theme,skillsPieChart}) =>
    <article className={theme.skillsPieChart}>
        <Section className={theme.skillLegend}>
            {skillsPieChart.pieData.map((val,ind)=><div className={theme.legend}>
                <span className={theme.legendColor} style={{background:val.color}}>{val.name}</span>{val.name}</div> )}
        </Section>
        <Section className={theme.pieChart}>
            <PieChart {...skillsPieChart} />
        </Section>
    </article>;

export default SkillsPieChart;