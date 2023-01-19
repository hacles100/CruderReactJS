import React from "react";
import './ReadMore.css';

import Header from "../../components/Header/Header";

import More from '../../images/more.svg'

function ReadMore(){

    return(

        <div>
            <Header />
            
            <main>

                <div className="cards">

                    <div className="card" >

                        <header>
                            <h2>Consumir API</h2>
                        </header>

                        <div className="line"></div>

                        <p>Consumir API e um conhecimento 
                           fundamental de um Frontend Developer
                           Consumir API e um conhecimento 
                           fundamental de um Frontend Developer
                           Consumir API e um conhecimento 
                           fundamental de um Frontend Developer
                           Consumir API e um conhecimento 
                           fundamental de um Frontend Developer
                           Consumir API e um conhecimento 
                           fundamental de um Frontend Developer
                        </p>

                    </div>

                </div>

                </main>
        </div>
    )
}

export default ReadMore