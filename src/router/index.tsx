import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
const Home = React.lazy(() => import('../pages/Home'))
const Explore = React.lazy(() => import('../pages/Explore'))
const About = React.lazy(() => import('../pages/About'))
const Auth = React.lazy(() => import('../pages/Auth'))
const Error = React.lazy(() => import('../pages/ErrorPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
    errorElement: <Error />,
  },
])
