import React from "react";
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";
import Skills from "./Skills";
import PersonalProjects from "./PersonalProjects";

const Body = ({
  experienceListData,
  educationListData,
  className,
  personalProjects
}) => {
  return (
    <section className={className}>
      <section>
        <ExperienceList
          experienceListData={experienceListData}
          className="experience-list box-shadow"
        />
      </section>
      <section>
        <Skills />
        <PersonalProjects
          projectList={personalProjects}
          className="box-shadow"
        />
        <EducationList
          educationListData={educationListData}
          className="education-list box-shadow margin-top"
        />
      </section>
    </section>
  );
};

export default Body;
