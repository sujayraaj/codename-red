import React from 'react';

const Navigation = ({navigationData, theme }) => {
        return (
            <nav className={theme.mainNavigation}>
            <div className={theme.navImage}>SR</div>
            <div className={theme.navContent}>
            {
                navigationData.map(val=> 
                    <a href={val.loc}>{val.display}</a>
                )
            }
            </div>
            </nav>     
        );            
}

export default Navigation;
