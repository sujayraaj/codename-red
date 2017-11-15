import React from 'react';

const Section = ({className,...props}) =>{
    console.log(className);
    return <section className={className} {...props}/>;
}; 

export default Section;
