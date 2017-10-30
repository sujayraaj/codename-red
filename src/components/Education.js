import React from 'react';

const Education = ({institute,
                location,
                degree,
                stream,
                year}) => {
        return (
            <div>
                <h5>{institute +','+location}</h5>
                <p>
                    {degree + ',' + stream + ',' + year}
                </p>
            </div>
        );            
}

export default Education;
