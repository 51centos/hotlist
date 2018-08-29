import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './containers/App';
import Link from './containers/Link';

const Routes = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/link" component={Link} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
