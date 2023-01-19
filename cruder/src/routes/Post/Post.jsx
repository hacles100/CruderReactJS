import React from "react";
import { Link } from "react-router-dom";
import './Post.css';

import Header from "../../components/Header/Header";

import { useForm } from 'react-hook-form'

function Post(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    return(
        <div>
           <Header/>

           <main>
             <div className="card-post">

                <h1>Criar Postagem</h1>
                <div className="line"></div>

                <div className="card-body-post">
                    <form>
                        <div className="fields">
                            <label>Titulo</label>
                            <input type="text" />
                        </div>

                        <div className="fields">
                            <label>Descricao</label>
                            <input type="text" />
                        </div>

                        <div className="fields">
                            <label>Conteudo</label>
                            <textarea type="text"></textarea>
                        </div>

                        <div className="btn-post">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>

             </div>
           </main>

        </div>
    )
}

export default Post