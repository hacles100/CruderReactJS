import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

import Back from '../../images/back-button.svg'

function Header() {
    return (
        <header>
            <div className="container">
                <Link to={`/`}>
                  <img src={Back}/>
                </Link>
            </div>
        </header>
    )
}

export default Header