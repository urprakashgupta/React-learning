import { useEffect, useState } from "react";
const Header = () => {
const [btnNameReact , setBtnnameReact] = useState("login")

    return (
        <div className="header">
            <div className="logo-container">
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
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