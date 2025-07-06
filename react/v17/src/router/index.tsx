import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/tinymce/demo1" />,
  },

  { path: '/home', exact: true, component: lazy(() => import('@/views/home/index.tsx')) },

  //#region 自定义组件
  { path: '/comp/func-panel', exact: true, component: lazy(() => import('@/views/comp/func-panel')) },
  { path: '/comp/search-tags', exact: true, component: lazy(() => import('@/views/comp/search-tags')) },
  { path: '/comp/table-ctrl', exact: true, component: lazy(() => import('@/views/comp/table-ctrl')) },
  //#endregion

  //#region antd
  //#region select
  { path: '/antd/select/demo1', exact: true, component: lazy(() => import('@/views/antd/select/demo1.tsx')) },
  { path: '/antd/treeSelect/demo1', exact: true, component: lazy(() => import('@/views/antd/treeSelect/demo1.tsx')) },
  //#endregion

  //#region form
  { path: '/antd/form/basic', exact: true, component: lazy(() => import('@/views/antd/form/basic.tsx')) },
  { path: '/antd/form/basic2', exact: true, component: lazy(() => import('@/views/antd/form/basic2.tsx')) },
  //#endregion

  //#region table
  // 基本使用
  { path: '/antd/table/basic', exact: true, component: lazy(() => import('@/views/antd/table/basic/index.tsx')) },
  // 可选择
  { path: '/antd/table/selection', exact: true, component: lazy(() => import('@/views/antd/table/selection/index.tsx')) },
  // 表头分组
  { path: '/antd/table/grouping-columns', exact: true, component: lazy(() => import('@/views/antd/table/grouping-columns/index.tsx')) },
  // 拖拽手柄列
  { path: '/antd/table/drag-sorting-handler', exact: true, component: lazy(() => import('@/views/antd/table/drag-sorting-handler/index.tsx')) },
  //#endregion
  //#endregion

  //#region 工具库
  { path: '/tools/momentjs', exact: true, component: lazy(() => import('@/views/tools/momentjs.tsx')) },
  { path: '/tools/lodash', exact: true, component: lazy(() => import('@/views/tools/lodash.tsx')) },
  { path: '/tools/qs', exact: true, component: lazy(() => import('@/views/tools/qs.tsx')) },
  //#endregion

  //#region other
  { path: '/vtable/demo1', exact: true, component: lazy(() => import('@/views/vtable/demo1.tsx')) },
  { path: '/tinymce/demo1', exact: true, component: lazy(() => import('@/views/tinymce/demo1.tsx')) },
  //#endregion
];
