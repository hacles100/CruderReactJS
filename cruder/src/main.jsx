import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'


import {  createBrowserRouter,  RouterProvider } from "react-router-dom";

// Import Routes
import Edit from './routes/Edit/Edit';
import Feed from './routes/Feed/Feed';
import Post from './routes/Post/Post';
import ReadMore from './routes/ReadMore/ReadMore';


// configuracao do roteamento

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [

      // rota feed / principal
      {
        path: "/",
        element: <Feed/>
      },

      // rota edit
      {
        path: "edit",
        element: <Edit/>
      },

      // rota post

      {
        path: "post",
        element: <Post/>
      },

      // rota read

      {
        path: "read",
        element: <ReadMore/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
