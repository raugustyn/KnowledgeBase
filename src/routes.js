import React from 'react';

const mapSymbols = React.lazy(() => import('./views/MapSymbols/MapSymbols'));
const dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const colors = React.lazy(() => import('./views/Colors/Colors'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/mapsymbols', name: 'Map Symbols', component: mapSymbols },
  { path: '/colors', name: 'Colors', component: colors },
  { path: '/dashboard', name: 'Dashboard', component: dashboard }
];

export default routes;
