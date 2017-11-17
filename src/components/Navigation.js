import React from 'react';

const Navigation = ({state, navigationData, theme,avatarUrl, callback }) => {
    return (
        <nav className={ state === 0 ? theme.mainNavigation : theme.mainNavigation + ' ' + theme.active} onClick={(evt)=>{callback()}}>
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
