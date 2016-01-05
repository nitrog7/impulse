import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import * as views from 'views';
import * as admin from 'views/admin';
import { RouteConstants } from 'constants';

const {
  HomeView,
  LayoutView
  } = views;

const {
  AdminHomeView,
  AdminLayoutView
  } = admin;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path='/' component={LayoutView}>
          <IndexRoute component={HomeView} />

          <Route path={RouteConstants.ADMIN} component={AdminLayoutView}>
            <IndexRoute component={AdminHomeView} />
          </Route>
        </Route>
      </Router>
    );
  }
}
