import React from 'react';
import pathOr from 'lodash/fp/pathOr';

import Introduction from './Introduction';

const Header = ({name,
                tagline,
                introduction,
                labels}) => {
                    console.log('RENDERED')
                return <header>
                    <h1>{name}</h1>
                    <h2>{tagline}</h2>
                    {console.log(labels)}
                    <Introduction introduction={introduction}
                                  introLabel={pathOr('','introduction',labels)}
                                  />
                </header>
                                
}

export default Header;
