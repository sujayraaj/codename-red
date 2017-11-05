import React from 'react';
import pathOr from 'lodash/fp/pathOr';

import Introduction from './Introduction';
import NameAndTagline from './NameAndTagline';
import Icons from './Icons';


const Header = ({name, tagline, introduction, labels, className, theme}) => 
                 (<header className={theme.header}>
                    <NameAndTagline name={name}
                                    tagline={tagline} theme={theme}/>
                    <Introduction introduction={introduction}
                                  introLabel={pathOr('','introduction',labels)}
                                  theme={theme} />
                    <Icons iconData={[{name:'facebook',loc:'www.facebook.com/sujayraaj'}]} />
                </header>)
                                

export default Header;
