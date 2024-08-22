import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
const [btnNameReact , setBtnnameReact] = useState("login")

    return (
        <div className="header">
            <div className="logo-container">
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"> Home</Link></li>
                    <li> <Link to = "/about"> About Us</Link></li>
                    <li>
                        <Link to= "/contact"> Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === "login" ? setBtnnameReact("logout") : setBtnnameReact("login");
                    }}
                    >{btnNameReact}</button>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;