import { createHashRouter } from 'react-router-dom'
import React, { Suspense } from 'react'
import ReduxView from '../views/redux/index.tsx'

const Home = React.lazy(() => import('../views/Home.tsx'))

//#region
const Basic = React.lazy(() => import('../views/basic/index.tsx'))
const BasicHome = React.lazy(() => import('../views/basic/Home.tsx'))

const List = React.lazy(() => import('../views/basic/List.tsx'))
const Conditional = React.lazy(() => import('../views/basic/Conditional.tsx'))
const EventHandling = React.lazy(() => import('../views/basic/EventHandling.tsx'))
const Styles = React.lazy(() => import('../views/basic/Styles/index.tsx'))
const Forms = React.lazy(() => import('../views/basic/Forms.tsx'))

const ClassComp = React.lazy(() => import('../views/basic/ClassComp.tsx'))
const Props = React.lazy(() => import('../views/basic/Props/index.tsx'))

const CustomHooks = React.lazy(() => import('../views/basic/hooks/CustomHooks.tsx'))
const UseState = React.lazy(() => import('../views/basic/hooks/UseState.tsx'))
const UseRef = React.lazy(() => import('../views/basic/hooks/UseRef.tsx'))
const UseContext = React.lazy(() => import('../views/basic/hooks/UseContext.tsx'))

const VDom = React.lazy(() => import('../views/basic/VDom.tsx'))
//#endregion

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
    path: '/basic',
    element: (
      <Suspense fallback={null}>
        <Basic />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={null}>
            <BasicHome />
          </Suspense>
        ),
      },
      {
        path: '/basic/list',
        element: (
          <Suspense fallback={null}>
            <List />
          </Suspense>
        ),
      },
      {
        path: '/basic/conditional',
        element: (
          <Suspense fallback={null}>
            <Conditional />
          </Suspense>
        ),
      },
      {
        path: '/basic/event-handing',
        element: (
          <Suspense fallback={null}>
            <EventHandling />
          </Suspense>
        ),
      },
      {
        path: '/basic/styles',
        element: (
          <Suspense fallback={null}>
            <Styles />
          </Suspense>
        ),
      },
      {
        path: '/basic/forms',
        element: (
          <Suspense fallback={null}>
            <Forms />
          </Suspense>
        ),
      },

      //#region 组件
      // 类组件
      {
        path: '/basic/classcomp',
        element: (
          <Suspense fallback={null}>
            <ClassComp />
          </Suspense>
        ),
      },
      {
        path: '/basic/props',
        element: (
          <Suspense fallback={null}>
            <Props />
          </Suspense>
        ),
      },
      //#endregion

      //#region hooks
      {
        path: '/basic/custom-hooks',
        element: (
          <Suspense fallback={null}>
            <CustomHooks />
          </Suspense>
        ),
      },

      {
        path: '/basic/useState',
        element: (
          <Suspense fallback={null}>
            <UseState />
          </Suspense>
        ),
      },
      {
        path: '/basic/useRef',
        element: (
          <Suspense fallback={null}>
            <UseRef />
          </Suspense>
        ),
      },
      {
        path: '/basic/useContext',
        element: (
          <Suspense fallback={null}>
            <UseContext />
          </Suspense>
        ),
      },
      //#endregion

      //#region 高级 & 原理
      {
        path: '/basic/vdom',
        element: (
          <Suspense fallback={null}>
            <VDom />
          </Suspense>
        ),
      },
      //#endregion
    ],
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
