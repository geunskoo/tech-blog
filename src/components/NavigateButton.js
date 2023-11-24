import * as React from "react"
import { Link } from "gatsby"

const NavigationButton = ({ to, children }) => {
    const isActive = window.location.pathname === to; // 현재 URL이 to와 일치하는지 확인

    return (
        <Link to={to}>
        <button className={`nav-button ${isActive ? "active" : ""}`}>
            {children}
        </button>
        </Link>
    );
};

export default NavigationButton