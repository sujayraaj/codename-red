import React from 'react';

const Introduction = ({introduction, introLabel, className }) => 
          <div className={className}><h3 className="box-shadow">{introLabel}</h3>
        <p>{introduction}</p></div>
        
export default Introduction;
