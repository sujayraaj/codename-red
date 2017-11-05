import React from "react";
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";
import Skills from "./Skills";
import PersonalProjects from "./PersonalProjects";
import Section from "./Section";

const Body = ({
  experienceListData,
  educationListData,
  className,
  personalProjects,
  theme,
}) => {
  return (
    <Section className={theme.bodySection}>
      <Section className={theme.experienceSection}>
        <ExperienceList
          experienceListData={experienceListData}
          theme={theme}
        />
      </Section>
      <Section className={theme.skillsSection}>
        <Skills theme={theme} />
      </Section>
      <Section className={theme.personalProjectSection}>
        <PersonalProjects
          projectList={personalProjects}
          theme={theme}
        />
        </Section>
        <Section className={theme.educationSection}>
        <EducationList
          educationListData={educationListData}
          theme={theme}
        />
      </Section>
    </Section>
  );
};

export default Body;
