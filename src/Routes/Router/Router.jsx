import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../../Pages/Home/Home/Home';
import Food from '../../Pages/Food/Food';
import Blog from '../../Pages/Blog/Blog';
import AddFood from '../../Pages/AddFood/AddFood';
import NotFound from '../../Sharde/NotFound/NotFound';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/food',
        element: <Food />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/addfood',
        element: <AddFood />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      
    ]
  },
]);



export default router;