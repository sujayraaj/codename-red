import React from 'react';
import pathOr from 'lodash/fp/pathOr';

import Introduction from './Introduction';
import NameAndTagline from './NameAndTagline';
import Icons from './Icons';
import StarField from './StarField';

const Header = ({name, tagline, introduction, labels, className, theme, firstName,lastName}) =>
 
    (<header className={theme.header} id="header">
       <StarField numberOfStars={300}/>

    </header>);
    
                                /* 
                                 <NameAndTagline name={name} firstName={firstName} lastName={lastName}
            tagline={tagline} theme={theme}/>
        <Introduction introduction={introduction}
            introLabel={pathOr('','introduction',labels)}
            theme={theme} />
        <Icons iconData={[{name:'facebook',loc:'www.facebook.com/sujayraaj'}]} />
        */
export default Header;
