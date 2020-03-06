import React from "react";
import styles from "./Navbar.module.css";

import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className={styles.navbar}>
            <h1>
                <Link to="/">Bloomberg Law</Link>
            </h1>
            <div className="topLinks">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Current Subscriber Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Academic Student Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/schools">Participating Academic Institutions</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
