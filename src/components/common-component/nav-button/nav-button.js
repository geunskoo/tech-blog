import React from "react";
import "./nav-button.css";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const NavButton = ({ to, children }) => {
    const location = useLocation();

    let isActive;
    if (['/bio/', '/blog/', '/book/', '/byeond/'].includes(location.pathname)){
        isActive = location.pathname === to;
    }else{
        const markdownPage = location.pathname.split('-')[0]+'/'
        isActive = markdownPage === to;
    }

    return (
        <div className="nav-button-wrapper">
            <Link className={`nav-button ${isActive ? "active" : ""}`} to={to}>
                {children} 
            </Link> 
        </div>
    );
};

export default NavButton;
