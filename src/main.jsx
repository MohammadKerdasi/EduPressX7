
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import Courses from './Pages/Courses.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import FAQs from './Pages/FAQs.jsx';
import LoginRegister from './Pages/LoginRegister.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Courses",
        element: <Courses />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "FAQs",
        element: <FAQs />,
      },
      {
      path: "LoginRegister",
      element: <LoginRegister />,
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
