import React from "react";
import "./variables.css";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

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
      navigation
    } = { ...this.props.data };
    return (
      <div className="App box-shadow">
        <Navigation navigationData={navigation}/>
        <Header
          name={name}
          tagline={tagline}
          introduction={introduction}
          labels={labels}
          className="header box-shadow"
        />
        <Body
          experienceListData={experience}
          educationListData={education}
          personalProjects={personalProjects}
          className="header box-shadow margin-top"
        />
        <Footer className="header box-shadow" />
      </div>
    );
  }
}

export default App;
