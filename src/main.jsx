import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Blog from './component/Blog/Blog.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import Login from './component/Login/Login.jsx';
import ChefDetail from './component/ChefDetail/ChefDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element : <Home></Home>
      },
      {
        path: '/about',
        element : <About></About>
      },
      {
        path: '/blog',
        element : <Blog></Blog>
      },
      {
        path: '/signUp',
        element : <SignUp></SignUp>
      },
      {
        path: '/login',
        element : <Login></Login>
      },
      {
        path: '/chefDetail/:id',
        element: <ChefDetail></ChefDetail>,
        loader : ({params}) => {
          return fetch(`http://localhost:5000/allChef/${params.id}`)
        }
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
