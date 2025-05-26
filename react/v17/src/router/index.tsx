import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/tools/momentjs" />,
  },

  { path: '/home', exact: true, component: lazy(() => import('@/views/home/index.tsx')) },

  //#region 工具库
  { path: '/tools/momentjs', exact: true, component: lazy(() => import('@/views/tools/momentjs.tsx')) },
  { path: '/tools/lodash', exact: true, component: lazy(() => import('@/views/tools/lodash.tsx')) },
  { path: '/tools/qs', exact: true, component: lazy(() => import('@/views/tools/qs.tsx')) },
  //#endregion

  //#region 组件
  { path: '/comp/func-panel', exact: true, component: lazy(() => import('@/views/comp/func-panel')) },
  { path: '/comp/search-tags', exact: true, component: lazy(() => import('@/views/comp/search-tags')) },
  { path: '/comp/table-ctrl', exact: true, component: lazy(() => import('@/views/comp/table-ctrl')) },
  //#endregion

  //#region antd 表单
  { path: '/antd/form/basic', exact: true, component: lazy(() => import('@/views/antd/form/basic.tsx')) },
  //#endregion

  //#region antd 表格
  { path: '/antd/table/basic', exact: true, component: lazy(() => import('@/views/antd/table/basic/index.tsx')) },
  {
    path: '/antd/table/table-type',
    exact: true,
    component: lazy(() => import('@/views/antd/table/table-type/index.tsx')),
  },
  //#endregion

  //#region vtable
  { path: '/vtable/demo1', exact: true, component: lazy(() => import('@/views/vtable/demo1.tsx')) },
  //#endregion
];
