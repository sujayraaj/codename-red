import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const data= {
    name: "Sujay Raj",
    tagline: "FrontEnd development professional",
    introduction: `Sujay is currently working as an Associate, Experience Technology in Sapient’s Gurgaon office. During his current work at Sapient, he has worked in front-end roles while delivering Projects spanning CMS, front-end MVC web-apps, hybrid mobile app and maintainence projects. Further, his first few months of work at Sapient involved extensive training in front-end web technologies like ReactJS+Redux, Javascript ( ES5 and ES6 ), HTML5, CSS3 and Bootstrap.
    Not being limited to roles, he has taken initiative in learning fullstack web development, delving into technologies like Node.js/Express.js as backend and MongoDB as the database, and devops skills like hosting, vps configuration and, Nginx server and its configuration.
    His past experience before working at Sapient includes working as a software development intern in a program organized by a Leading Search-Engine Provider. His past work included porting a web server to a real time operating system, wherein he dealt extensively with network protocols.`,
    experience:[
        {
            organization: 'Sapient Corporation',
            startDate: 'June 2016',
            endDate: 'present',
            roles: [
                {
                    title:'Developer - HTML/CSS/JS',
                    type: 'CMS and Front End MVC web app',
                    summary: 'The project is a CMS web app that provides web experience to the client’s customer. It included cms components and a live scoreboard through which their customers can keep track of the matches the client organizes',
                    description: [
                        'Worked on building two leaderboards for various types of golf games and its scenarios. The technology used was ReactJS+Redux. This was single page application embedded inside the CMS site.',
                        'Worked on creating multiple components for the CMS, using HTML CSS and a JQuery framework custom developed for this project. Parts of Bootstrap were used (for example grids). Work also involved getting the component integrated into SiteCore views with the models.',
                        'Worked on the AA level accessibility compliance throughout the 100+ components of the whole website'
                    ]
                },
                {
                    title:'Developer - HTML/CSS/JS',
                    type: 'Hybrid mobile app',
                    summary: 'The project is a CMS web app that provides web experience to the client’s customer. It included cms components and a live scoreboard through which their customers can keep track of the matches the client organizes',
                    description: [
                        'Worked on building two leaderboards for various types of golf games and its scenarios. The technology used was ReactJS+Redux. This was single page application embedded inside the CMS site.',
                        'Worked on creating multiple components for the CMS, using HTML CSS and a JQuery framework custom developed for this project. Parts of Bootstrap were used (for example grids). Work also involved getting the component integrated into SiteCore views with the models.',
                        'Worked on the AA level accessibility compliance throughout the 100+ components of the whole website'
                    ]
                },
            ]
        },
        {
            organization: 'Sapient Corporation',
            startDate: 'June 2016',
            endDate: 'present',
            roles: [
                {
                    title:'Developer - HTML/CSS/JS',
                    type: 'CMS and Front End MVC web app',
                    summary: 'The project is a CMS web app that provides web experience to the client’s customer. It included cms components and a live scoreboard through which their customers can keep track of the matches the client organizes',
                    description: [
                        'Worked on building two leaderboards for various types of golf games and its scenarios. The technology used was ReactJS+Redux. This was single page application embedded inside the CMS site.',
                        'Worked on creating multiple components for the CMS, using HTML CSS and a JQuery framework custom developed for this project. Parts of Bootstrap were used (for example grids). Work also involved getting the component integrated into SiteCore views with the models.',
                        'Worked on the AA level accessibility compliance throughout the 100+ components of the whole website'
                    ]
                },
                {
                    title:'Developer - HTML/CSS/JS',
                    type: 'Hybrid mobile app',
                    summary: 'The project is a CMS web app that provides web experience to the client’s customer. It included cms components and a live scoreboard through which their customers can keep track of the matches the client organizes',
                    description: [
                        'Worked on building two leaderboards for various types of golf games and its scenarios. The technology used was ReactJS+Redux. This was single page application embedded inside the CMS site.',
                        'Worked on creating multiple components for the CMS, using HTML CSS and a JQuery framework custom developed for this project. Parts of Bootstrap were used (for example grids). Work also involved getting the component integrated into SiteCore views with the models.',
                        'Worked on the AA level accessibility compliance throughout the 100+ components of the whole website'
                    ]
                },
            ]
        }

    ],
    education:[
        {
            institute: 'Indian Institute of Technology',
            location: 'Dhanbad, Jharkhand, India',
            degree: '5 Year Integrated Master of Technology',
            stream: 'Mathematics and Computing',
            year: '2016'
        },
    ],
    labels: {
      introduction: "Introduction"
    }
  }
  
ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();

