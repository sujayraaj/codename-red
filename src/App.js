import React from 'react';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends React.PureComponent {
  render() {
    console.log(this.props,'STATE');
    const {name, tagline, introduction, labels,experience} = {...this.props.data};
    return (
      <div className="App">
        <Header name={name} tagline={tagline} introduction={introduction} labels={labels} />
        <Body experienceListData={experience} />
        <Footer />
      </div>
    );
  }
}

export default App;


