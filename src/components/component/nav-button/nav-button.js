import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const NavigationButton = ({ to, children }) => {
    const location = useLocation();

    let isActive;
    if (['/bio/', '/blog/', '/book/', '/byeond/'].includes(location.pathname)){
        isActive = location.pathname === to;
    }else{
        const markdownPage = location.pathname.split('-')[0]+'/'
        isActive = markdownPage === to;
    }

    return (
        <Link className={`layout-nav-button ${isActive ? "active" : ""}`} to={to}>
            {children} 
        </Link> 
    );
};

export default NavigationButton;
