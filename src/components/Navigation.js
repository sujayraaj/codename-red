import React from 'react';

const Navigation = ({navigationData, theme,avatarUrl }) => {
    return (
        <nav className={theme.mainNavigation}>
            <div className={theme.navImage}>
                <img src={avatarUrl}/>
            </div>
            <div className={theme.navContent}>
                {
                    navigationData.map(val=> 
                        <a href={val.loc}>{val.display}</a>
                    )
                }
            </div>
        </nav>     
    );            
};

export default Navigation;
