import React from "react";
import './HeaderMain.css';

import { Link } from "react-router-dom";

function HeaderMain(){

    return(
        <header>
        <div className="container">
            <div className="logo">
                <h1>CRUDER</h1>
            </div>

            <div className="btn-newPost">
                <Link to={`/post`}>
                  <button>Add Post</button>
                </Link>
            </div>
        </div>
    </header>
    )
}

export default HeaderMain