import React from 'react';
import PropTypes from 'prop-types';
import './variables.css';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Section from './components/Section';
import ColorPallete from './components/ColorPallete';

import palette from './palette';

class App extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            paletteIndex:0,
            navigationState:0,
            maxNavigationStates:2,
        };
    }
    changeNavigationState(){
        const navigationState = (this.state.navigationState + 1 ) % this.state.maxNavigationStates;
        this.setState({navigationState})
        console.log(this.state.navigationState)
        console.log(this.state);
    }
    render() {
        const {
            name,
            firstName,
            lastName,
            tagline,
            introduction,
            labels,
            experience,
            education,
            personalProjects,
            navigation,
            avatarUrl,
            skills,
        } = { ...this.props.data };
        const theme = {...this.props.theme};
        return (
            <div className={theme.App}>
                <ColorPallete {...palette[this.state.paletteIndex]}/>
                {/*<Section className={theme.leftSection}>
                    <Navigation navigationData={navigation} theme={theme} avatarUrl={avatarUrl} state={this.state.navigationState} callback={this.changeNavigationState.bind(this)}/>
        </Section>*/}
                <Section className={theme.rightSection}>
{/*                    <button className={theme.paletteButton} onClick={(evt)=> this.setState({paletteIndex:(this.state.paletteIndex+1)%palette.length})} >Next Palette</button>
    */}                    <Header
                        name={name}
                        tagline={tagline}
                        introduction={introduction}
                        labels={labels}
                        className={theme.header}
                        theme={theme}
                        firstName={firstName}
                        lastName={lastName}
                    />
                    <Body
                        experienceListData={experience}
                        educationListData={education}
                        personalProjects={personalProjects}
                        className={theme.body}
                        theme={theme}
                        skills={skills}
                    />
                    <Footer theme={theme} />
                </Section>
            </div>
        );
    }
}

export default App;
