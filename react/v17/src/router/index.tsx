import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/antd/table/basic" />,
  },

  { path: '/home', exact: true, component: lazy(() => import('@/views/home/index.tsx')) },

  //#region antd 表单
  { path: '/antd/form/basic', exact: true, component: lazy(() => import('@/views/antd/form/basic.tsx')) },
  //#endregion

  //#region antd 表格
  { path: '/antd/table/basic', exact: true, component: lazy(() => import('@/views/antd/table/basic/index.tsx')) },
  //#endregion

  //#region vtable
  { path: '/vtable/demo1', exact: true, component: lazy(() => import('@/views/vtable/demo1.tsx')) },
  //#endregion
];
