import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Home from './routes/Home'
import Terror from './routes/Filmes'
import Filme from './routes/Filme'
import Adiciona from './routes/Adiciona'

import { ToastContainer } from 'react-toastify'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/:genero",
        element: <Terror/>
      },
      {
        path: "/adiciona",
        element: <Adiciona/>
      },
      {
        
        path: "/:genero/:id",
        element: <Filme/>
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={3000}/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
