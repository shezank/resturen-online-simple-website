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
import AddedFood from '../../Pages/AddedFood/AddedFood';
import ProductDetails from '../../Pages/Food/ProductDetails';
import OrderFoods from '../../Pages/OrderFoods/OrderFoods';


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
        element: <Food />,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: '/food/details/:id',
        element: <ProductDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/products/details/${params.id}`)
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
        path: '/addedfood',
        element: <AddedFood />
      },
      {
        path: '/orders',
        element: <OrderFoods />
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