const data = {
    avatarUrl: '/images/image.png',
    name: 'SUJAY RAJ',
    firstName:'SUJAY',
    lastName:'RAJ',
    tagline: 'Fulltime Frontend, Part-time Backend, Sometimes Devops',
    introduction: 'Sujay is currently working as an Associate, Experience Technology in Sapient’s Gurgaon office. During his current work at Sapient, he has worked in front-end roles while delivering Projects spanning CMS, front-end MVC web-apps, hybrid mobile app and maintainence projects. Further, his first few months of work at Sapient involved extensive training in front-end web technologies like ReactJS+Redux, Javascript ( ES5 and ES6 ), HTML5, CSS3 and Bootstrap. Not being limited to roles, he has taken initiative in learning fullstack web development, delving into technologies like Node.js/Express.js as backend and MongoDB as the database, and devops skills like hosting, vps configuration and, Nginx server and its configuration. His past experience before working at Sapient includes working as a software development intern in a program organized by a Leading Search-Engine Provider. His past work included porting a web server to a real time operating system, wherein he dealt extensively with network protocols.',
    experience: [
        {
            organization: 'Sapient Corporation',
            startDate: 'June 2016',
            endDate: 'present',
            roles: [
                {
                    title: 'Developer - Javascript',
                    type: 'Frontend optimization for an Ecommerce website',
                    summary:
            'Reimplimentation of an Ecommerce website to optimize the performance, using bleeding edge architecture',
                    description: [
                        'Joined the project in Enterprise Architecture Review phase, and created High Level Designs for various functionalities',
                        'Work involved designing reusable components, preferably on a functional programming paradigm, to scale',
                        'Closely worked on bootstrapping the project, tuning the boilerplate for the highly specific requirements of the project'
                    ]
                },
                {
                    title: 'Developer - HTML/CSS/JS',
                    type: 'CMS and Front End MVC web app',
                    summary:
            'The project is a CMS web app that provides web experience to the client’s customer. It included cms components and a live scoreboard through which their customers can keep track of the matches the client organizes',
                    description: [
                        'Worked on building two leaderboards for various types of golf games and its scenarios. The technology used was ReactJS+Redux. This was single page application embedded inside the CMS site.',
                        'Worked on creating multiple components for the CMS, using HTML CSS and a JQuery framework custom developed for this project. Parts of Bootstrap were used (for example grids). Work also involved getting the component integrated into SiteCore views with the models.',
                        'Worked on the AA level accessibility compliance throughout the 100+ components of the whole website'
                    ]
                },
                {
                    title: 'Developer - HTML/CSS/JS',
                    type: 'Hybrid mobile app',
                    summary:
            'This was a fan engagement app built by reusing the already existing web app and integrating it into a native mobile app.',
                    description: [
                        'Worked through the design and implementation phase, wherein my role was to calculate the feasibility of integrating the web app into the mobile app. POCs were created and primary work was done on the communication between the native app, (on Android and IOS),  and the web page. as well as app specific styling of the same components displayed on web.'
                    ]
                },
                {
                    title: 'Developer - HTML/CSS/JS',
                    type: 'Maintainence',
                    description: [
                        'Worked on fixing issues on a custom JS framework which was a hybrid between JQuery and RiotJS'
                    ]
                },
                {
                    title: 'Junior Interactive Developer',
                    type: 'Internal Project',
                    summary:
            'The project was a candidate management application from the initiation to when the candidate finally joins the company. It was a single page application developed in two phases, prototyperd in a custom framework and then ported over to React/Redux.',
                    description: [
                        'During the first phase of the development I was the lead for the global components team for the project. I worked closely with a team of 10 people on getting overall picture of how the project will go and set up the project for development. During this project we used Handlebars templating and a custom developed JS framework to rapidly prototype the application.',
                        'During the second phase of the development, my role became varied and I was in charge of deciding the architecture and data flow, and was the maintainer who oversaw code quality and merged code to the main development repository.'
                    ]
                }
            ]
        },
        {
            organization: 'RTEMS, for Google Summer of Code',
            startDate: 'May 2015',
            endDate: 'August 2015',
            roles: [
                {
                    title: 'Software Development Intern',
                    type: 'Software development and Testing',
                    summary:
            'Ported the Monkey HTTP Server and Development stack (Version 1.6) to the RTEMS OS.',
                    description: [
                        'Changed the event multiplexing in the server to adopt to RTEMS environment. Used Kqueue, with select as a fallback',
                        'Set up the cmake build system to use the RTEMS development tools',
                        'Made changes to get networking working on Xilinx Zynq A9 processor BSP of RTEMS on QEUMU',
                        'I was responsible for the planning, estimation and implementation of the Project from ground up'
                    ]
                }
            ]
        }
    ],
    education: [
        {
            institute: 'Indian Institute of Technology',
            location: 'Dhanbad, Jharkhand, India',
            degree: '5 Year Integrated Master of Technology',
            stream: 'Mathematics and Computing',
            year: '2016'
        }
    ],
    personalProjects: [
        {
            title: 'Nyun',
            description:
        'Expressing ES6 template strings as a rendering engine for ExpressJS. Neat and Fast and Native',
            url: 'https://github.com/sujayraaj/PulseOS'
        },
        {
            title: 'PulseOS',
            description:
        'An x86 operating system kernel, written in C and assembly that can boot and do some things',
            url: 'https://github.com/sujayraaj/PulseOS'
        },
        {
            title: 'Tables',
            description:
        'A table implimented in ReactJS. Not too good, but does pagination',
            url: 'https://github.com/sujayraaj/tables'
        },
        {
            title: 'Webserver',
            description:
        'A webserver written in Python that supports GET requests. Toy for anyone who wants to know how a multiprocessing server works',
            url: 'https://github.com/sujayraaj/webserver'
        },
        {
            title: 'PulseBrowse',
            description:
        'A concept web browser trying to use the Electron framework and Jquery to mimic browsing and tabbing',
            url: 'https://github.com/sujayraaj/PulseBrowse'
        },
        {
            title: 'LinuxPowerReminder',
            description: 'Tells people that power went away by blinking the screen',
            url: 'https://github.com/sujayraaj/linuxPowerReminder'
        },
        {
            title: 'CSS Tux',
            description:
        'Our friendly neighbourhood penguin made in CSS, moving eyes in JS',
            url: 'https://codepen.io/sujayraaj/pen/BzZxWO'
        },
        {
            title: 'Spinner',
            description: 'A CSS spinner/Loader, that looks good?',
            url: 'https://codepen.io/sujayraaj/pen/NbpJmv'
        },
        {
            title: 'Submarine',
            description: 'A submarine written in CSS',
            url: 'https://codepen.io/sujayraaj/pen/LkrNAR'
        },
        {
            title: 'DOMClock',
            description: 'What else can somenoe\'s first JS project be?',
            url: 'https://codepen.io/sujayraaj/pen/RRqpxA'
        },
        {
            title: 'PieChart',
            description:
        'PieChart in JS/SVG. I can spot too many improvements in this now that I have been working with JS for some time',
            url: 'https://codepen.io/sujayraaj/pen/kXQxLk'
        }
    ],
    skills:{
        skillsPieChart:{
            width:1000,
            height:1000,
            radius:300,
            pieData: [
                { value: 10, color: 'red', opacity: 0.5, name:'A' },
                { value: 30, color: 'green', opacity: 0.5, name:'B' },
                { value: 45, color: 'yellow', opacity: 0.5, name:'C' },
                { value: 5, color: 'blue', opacity: 0.5, name:'D' },
                { value: 10, color: 'purple', opacity: 0.5, name:'E' },
            ]
        }
    },
    labels: {
        introduction: 'Introduction',
    },
    navigation: [
        {loc:'#header',display:'ABOUT'},
        {loc:'#experience',display:'EXPERIENCE'},
        {loc:'#education',display:'EDUCATION'},
        {loc:'#skills',display:'SKILLS'},
        {loc:'#personal',display:'PERSONAL PROJECTS'},
        {loc:'#awards',display:'AWARDS'},
    ]
};

export default data;
