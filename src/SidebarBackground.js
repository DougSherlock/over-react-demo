import React from 'react';
import './App.css';

function SidebarBackground(props) {

    const handleClick = (e) => {
        //alert('SidebarBackground clicked');
        props.clickFunc();
    }

    return (  
        <div className="sidebar-background" id="sidebar-background" onClick={handleClick}>
        </div>
  );

}

export default SidebarBackground;
