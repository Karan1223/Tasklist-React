import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './pages/Root.tsx'
import Home from './pages/Home.tsx'
import App from './App.tsx'
import About from './pages/About.tsx'
import Contacts from './pages/Contacts.tsx'
import Posts from './pages/Photo.tsx'
//import './index.css'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root/>,
    children: [
      {path: "home", element: <Home/>},
      {path: "tasklist", element: <App/>},
      {path: "about", element: <About/>},
      {path: "contacts", element: <Contacts/>},
      {path: "posts", element: <Posts/>}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
