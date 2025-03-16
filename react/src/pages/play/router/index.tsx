import { createHashRouter } from 'react-router-dom'
import React, { Suspense } from 'react'
import ReduxView from '../views/redux/index.tsx'

const Home = React.lazy(() => import('../views/Home.tsx'))
const About = React.lazy(() => import('../views/About.tsx'))

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={null}>
        <About />
      </Suspense>
    ),
  },
  {
    path: '/redux',
    element: (
      <Suspense fallback={null}>
        <ReduxView />
      </Suspense>
    ),
  },
])

export default router
