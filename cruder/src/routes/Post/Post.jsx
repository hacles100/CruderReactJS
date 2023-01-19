import React from "react";
import { Link } from "react-router-dom";
import './Post.css';

import Header from "../../components/Header/Header";

import { useForm } from 'react-hook-form'

function Post(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    const addPost = data => console.log(data)

    return(
        <div>
           <Header/>

           <main>
             <div className="card-post">

                <h1>Criar Postagem</h1>
                <div className="line"></div>

                <div className="card-body-post">

                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="fields">
                            <label>Title</label>
                            <input type="text" name="title" {...register("title")}/>
                        </div>

                        <div className="fields">
                            <label>Description</label>
                            <input type="text" name="description" {...register("description")}/>
                        </div>

                        <div className="fields">
                            <label>Content</label>
                            <textarea type="text" name="content" {...register("content")}></textarea>
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