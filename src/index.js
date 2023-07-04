import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Admin from './Admin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router =  createBrowserRouter([
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/',
    element: <App />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)
