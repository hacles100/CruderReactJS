import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import {  createBrowserRouter,  RouterProvider } from "react-router-dom";

// Import Routes
import Edit from './routes/Edit';
import Feed from './routes/Feed';
import Post from './routes/Post';
import ReadMore from './routes/ReadMore';


// configuracao do roteamento

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [

      // rota feed
      {
        path: "/",
        element: <Feed/>
      },

      // rota edit
      {
        path: "edit",
        element: <Edit/>
      },

      {
        path: "post",
        element: <Post/>
      },

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
