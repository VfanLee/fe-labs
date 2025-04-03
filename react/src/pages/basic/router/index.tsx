import { createHashRouter } from 'react-router-dom'
import React, { Suspense } from 'react'

const Home = React.lazy(() => import('../views/Home.tsx'))
const VDom = React.lazy(() => import('../views/VDom.tsx'))
const List = React.lazy(() => import('../views/List.tsx'))
const Conditional = React.lazy(() => import('../views/Conditional.tsx'))
const EventHandling = React.lazy(() => import('../views/EventHandling.tsx'))
const Styles = React.lazy(() => import('../views/Styles/index.tsx'))
const Forms = React.lazy(() => import('../views/Forms.tsx'))

const ClassComp = React.lazy(() => import('../views/ClassComp.tsx'))
const Props = React.lazy(() => import('../views/Props.tsx'))

const UseState = React.lazy(() => import('../views/hooks/UseState.tsx'))
const UseRef = React.lazy(() => import('../views/hooks/UseRef.tsx'))

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
    path: '/list',
    element: (
      <Suspense fallback={null}>
        <List />
      </Suspense>
    ),
  },
  {
    path: '/conditional',
    element: (
      <Suspense fallback={null}>
        <Conditional />
      </Suspense>
    ),
  },
  {
    path: '/event-handing',
    element: (
      <Suspense fallback={null}>
        <EventHandling />
      </Suspense>
    ),
  },
  {
    path: '/styles',
    element: (
      <Suspense fallback={null}>
        <Styles />
      </Suspense>
    ),
  },
  {
    path: '/forms',
    element: (
      <Suspense fallback={null}>
        <Forms />
      </Suspense>
    ),
  },

  //#region 组件
  // 类组件
  {
    path: '/classcomp',
    element: (
      <Suspense fallback={null}>
        <ClassComp />
      </Suspense>
    ),
  },
  {
    path: '/props',
    element: (
      <Suspense fallback={null}>
        <Props />
      </Suspense>
    ),
  },
  //#endregion

  //#region hooks
  {
    path: '/useState',
    element: (
      <Suspense fallback={null}>
        <UseState />
      </Suspense>
    ),
  },
  {
    path: '/useRef',
    element: (
      <Suspense fallback={null}>
        <UseRef />
      </Suspense>
    ),
  },
  //#endregion

  //#region 高级 & 原理
  {
    path: '/vdom',
    element: (
      <Suspense fallback={null}>
        <VDom />
      </Suspense>
    ),
  },
  //#endregion
])

export default router
