import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Orders from './components/Orders/Orders';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path:'order',
        element:<Orders></Orders>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={(router)} />
  </React.StrictMode>,
)
