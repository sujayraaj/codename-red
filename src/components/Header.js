import React from 'react';
import pathOr from 'lodash/fp/pathOr';

import Introduction from './Introduction';
import NameAndTagline from './NameAndTagline';

import './Header.css'

const Header = ({name, tagline, introduction, labels, className}) => 
                 (<header className={className}>
                    <NameAndTagline className="name-and-tagline box-shadow"
                                    name={name}
                                    tagline={tagline}/>
                    <Introduction introduction={introduction}
                                  introLabel={pathOr('','introduction',labels)}
                                  className="introduction box-shadow margin-top"/>
                </header>)
                                

export default Header;
