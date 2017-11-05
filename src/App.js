import React from "react";
import propTypes from 'prop-types';
import "./variables.css";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section from "./components/Section";

class App extends React.PureComponent {
  render() {
    const {
      name,
      tagline,
      introduction,
      labels,
      experience,
      education,
      personalProjects,
      navigation,
    } = { ...this.props.data };
    const theme = {...this.props.theme};
    return (
      <div className={theme.App}>
        <Section className={theme.leftSection}>
          <Navigation navigationData={navigation} theme={theme}/>
          <span/>
        </Section>
        <Section className={theme.rightSection}>
          <Header
          name={name}
          tagline={tagline}
          introduction={introduction}
          labels={labels}
          className={theme.header}
          theme={theme}
        />
        <Body
          experienceListData={experience}
          educationListData={education}
          personalProjects={personalProjects}
          className={theme.body}
          theme={theme}
        />
        <Footer theme={theme} />
        </Section>
      </div>
    );
  }
}

export default App;
