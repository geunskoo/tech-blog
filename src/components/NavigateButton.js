import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const NavigationButton = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

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
