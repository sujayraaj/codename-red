import React from 'react';

const NameAndTagline = ({className,name,tagline}) =>
    (<div className={className}>
    <h1>{name}</h1>
    <h2>{tagline}</h2>
    </div>)

export default NameAndTagline;