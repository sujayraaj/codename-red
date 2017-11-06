import React from 'react';

const NameAndTagline = ({className,name,tagline,theme, lastName, firstName}) =>
    (<div className={theme.nameAndTagLine} >
    <h1 className={theme.name}><span className={theme.firstName}>{firstName}</span><span className={theme.lastName}>{lastName}</span></h1>
    <h2 className={theme.tagline}>{tagline}</h2>
    </div>)

export default NameAndTagline;