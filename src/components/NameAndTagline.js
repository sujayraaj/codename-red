import React from 'react';

const NameAndTagline = ({className,name,tagline,theme}) =>
    (<div className={theme.nameAndTagLine} >
    <h1 className={theme.name}>{name}</h1>
    <h2 className={theme.tagline}>{tagline}</h2>
    </div>)

export default NameAndTagline;