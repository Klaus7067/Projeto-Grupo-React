import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Home from './routes/Home'
import Produtos from './routes/Perifericos'
import Hardware from './routes/Hardware'
import Perifericos from './routes/Perifericos'
import Smartphones from './routes/Smartphones'
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
        path: "/hardware",
        element: <Hardware/>
      },
      {
        path: "/perifericos",
        element: <Perifericos/>
      },
      {
        path: "/Smartphones",
        element: <Smartphones/>
      },
      {
        path: "/adiciona",
        element: <Adiciona/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
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
