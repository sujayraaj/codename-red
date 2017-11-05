import React from 'react';

const Navigation = ({navigationData, className }) => {
        return (
            <nav>
            {
                navigationData.map(val=> <div>
                    <a href={val.loc}>{val.display}</a>
                </div>)
            }
            </nav>     
        );            
}

export default Navigation;
