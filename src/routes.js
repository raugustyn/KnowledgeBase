import React from 'react';

const mapSymbols = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/mapsymbols', name: 'Map Symbols', component: mapSymbols }
];

export default routes;
