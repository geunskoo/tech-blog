import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const NavigationButton = ({ to, children }) => {
    const location = useLocation();

    let isActive;
    if (['/bio/','/blog/','/book/','/byeond/'].includes(location.pathname)){
        isActive = location.pathname === to;
    }else{
        const markdownPage = location.pathname.split('-')[0]+'/'
        isActive = markdownPage === to;
    }

    const handleClick = () => {
        navigate(to);
    };

    return (
        <button className={`layout-nav-button ${isActive ? "active" : ""}`} onClick={handleClick}>
            {children} 
        </button> 
    );
};

export default NavigationButton;
