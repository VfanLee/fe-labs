import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/antd/select/demo1" />,
  },

  { path: '/home', exact: true, component: lazy(() => import('@/views/home/index.tsx')) },

  //#region 自定义组件
  { path: '/comp/func-panel', exact: true, component: lazy(() => import('@/views/comp/func-panel')) },
  { path: '/comp/search-tags', exact: true, component: lazy(() => import('@/views/comp/search-tags')) },
  { path: '/comp/table-ctrl', exact: true, component: lazy(() => import('@/views/comp/table-ctrl')) },
  //#endregion

  //#region antd
  // select
  { path: '/antd/select/demo1', exact: true, component: lazy(() => import('@/views/antd/select/demo1.tsx')) },
  { path: '/antd/treeSelect/demo1', exact: true, component: lazy(() => import('@/views/antd/treeSelect/demo1.tsx')) },
  // form
  { path: '/antd/form/basic', exact: true, component: lazy(() => import('@/views/antd/form/basic.tsx')) },
  // table
  { path: '/antd/table/basic', exact: true, component: lazy(() => import('@/views/antd/table/basic/index.tsx')) },
  {
    path: '/antd/table/table-type',
    exact: true,
    component: lazy(() => import('@/views/antd/table/table-type/index.tsx')),
  },
  //#endregion

  //#region 工具库
  { path: '/tools/momentjs', exact: true, component: lazy(() => import('@/views/tools/momentjs.tsx')) },
  { path: '/tools/lodash', exact: true, component: lazy(() => import('@/views/tools/lodash.tsx')) },
  { path: '/tools/qs', exact: true, component: lazy(() => import('@/views/tools/qs.tsx')) },
  //#endregion

  //#region vtable
  { path: '/vtable/demo1', exact: true, component: lazy(() => import('@/views/vtable/demo1.tsx')) },
  //#endregion
];
