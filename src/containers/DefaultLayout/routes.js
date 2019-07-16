import React from 'react';

const Radecek = React.lazy(() => import('../../views/radecek'));
const Dashboard = React.lazy(() => import('../../views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/radecek', exact: true, name: 'Theme', component: Radecek }
];

export default routes;
