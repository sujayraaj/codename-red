import React from 'react';

export const Icons = ({iconData, ...props}) => 
    iconData.map(val => <a href={val.loc}>{val.name}</a>)


export default Icons;