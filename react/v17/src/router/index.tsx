import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/vtable/demo1" />,
  },

  { path: '/home', exact: true, component: lazy(() => import('@/views/home')) },

  //#region antd 表单
  { path: '/antd/form/basic', exact: true, component: lazy(() => import('@/views/antd/form/basic')) },
  //#endregion

  //#region antd 表格
  { path: '/antd/table/basic', exact: true, component: lazy(() => import('@/views/antd/table/basic')) },
  //#endregion

  //#region
  { path: '/vtable/demo1', exact: true, component: lazy(() => import('@/views/vtable/demo1')) },
  //#endregion
];
