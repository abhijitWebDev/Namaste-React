import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import About from './component/About';
import Error from './component/Error';
import Contact from './component/Contact';
import Login from './component/Login';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './component/RestaurantMenu';


const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/contact',
        element: <Contact />,
      },
      {
        path:'/',
        element: <Body />,
      },
      {
        path:'/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },

    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
