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
import PrivateRoute from '../../Sharde/PrivateRoute/PrivateRoute';
import UpdateFood from '../../Pages/AddedFood/UpdateFood';
import OrderFood from '../../Pages/OrderFood/OrderFood';


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
        loader: ()=> fetch('https://kashmeri-resturent-server.vercel.app/productsCount')
        
      },
      {
        path: '/food/details/:id',
        element: <PrivateRoute><ProductDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://kashmeri-resturent-server.vercel.app/products/details/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/addfood',
        element: <PrivateRoute><AddFood /></PrivateRoute>
      },
      {
        path: '/addedfood',
        element: <PrivateRoute><AddedFood></AddedFood></PrivateRoute>
      },
      {
        path: 'products/:uid',
        element: <PrivateRoute><UpdateFood/></PrivateRoute>,
        loader: ({params})=> fetch(`https://kashmeri-resturent-server.vercel.app/products/${params.uid}`)
        
      },
      {
        path: '/orders',
        element: <PrivateRoute><OrderFoods /></PrivateRoute>
      },
      {
        path: '/order/:id',
        element: <PrivateRoute><OrderFood /></PrivateRoute>,
        loader: ({params}) => fetch(`https://kashmeri-resturent-server.vercel.app/products/details/${params.id}`)
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