import React from "react";
import { Link } from "react-router-dom";
import './Feed.css';

import HeaderMain from "../../components/HeaderMain/HeaderMain";

import More from '../../images/more.svg'

function Feed(){

    return(
        <div>
           <HeaderMain/>

           <main>
             <div className="cards">

                <div className="card">
                    <header>
                        <h2>Consumir API</h2>
                        <img src={More}/>
                    </header>

                    <div className="line"></div>

                    <p>Consumir API e um conhecimento 
                           fundamental de um Frontend Developer
                    </p>

                    <div className="btns">
                        <div className="btn-edit">
                            <Link to={`/edit`}>
                              <button>Edit</button>
                            </Link>
                        </div>

                        <div className="btn-readmore">
                            <Link to={`/read`}>
                              <button>Read More</button>
                            </Link>
                        </div>

                        <div className="btn-delete">
                            <button>Delete</button>
                        </div>
                    </div>

                </div>
             </div>
           </main>
        </div>
    )
}

export default Feed