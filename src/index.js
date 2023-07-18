import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Admin from './Admin'
import ContactUs from './Components/ContactUs/ContactUs'
import YourListings from './Components/Admin/YourListings/YourListings'
import Profile from './Components/Admin/Profile/Profile'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router =  createBrowserRouter([
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/admin/listings',
    element: <YourListings />
  },
  {
    path: '/',
    element: <App />
  },
  {
    path: '/contact-us',
    element: <ContactUs />
  },
  {
    path: 'admin/profile',
    element: <Profile />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)
