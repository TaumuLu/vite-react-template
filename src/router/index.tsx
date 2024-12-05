import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import { RouterPath } from '@/constant/router'

const Root = () => import('@/pages/root')
const Home = () => import('@/pages/home')

export const RouteObjectList = [
  {
    path: RouterPath.Root,
    lazy: Root,
    children: [
      {
        index: true,
        element: <Navigate to={RouterPath.Home} />,
      },
      {
        path: RouterPath.Home,
        index: true,
        lazy: Home,
      },
    ],
  },
] satisfies RouteObject[]

export const router = createBrowserRouter(RouteObjectList)
