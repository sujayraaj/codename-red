import React from 'react';

const Role = ({title,
                type,
                summary,
                description}) => {
        return (
            <div>
                <h5>{title +' - '+type}</h5>
                  <p>{summary}</p>
                <ul>
                    {
                        description.map(val=><li>{val}</li>)
                    }
                </ul>
            </div>
        );            
}

export default Role;
