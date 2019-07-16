import React, { Component } from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import OldFaceApp from "./OldFaceApp"
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


// Containers
const OldFaceLayout = React.lazy(() => import("./OldFaceApp"));
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Login'));

class App extends Component {


  renderWithPaths() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route path="/OldFace" name="OldFace" render={props => <OldFaceLayout {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default OldFaceApp
