import { createHashRouter } from 'react-router-dom'
import React, { Suspense } from 'react'

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
])

export default router
