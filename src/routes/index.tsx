import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import RegisterEmployee from '../pages/RegisterEmployee';
import EditEmployee from '../pages/EditEmployee';
import ManageCategories from '../pages/ManageCategories';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} isPrivate />
        <Route exact path="/register" component={RegisterEmployee} isPrivate />
        <Route exact path="/update/:id" component={EditEmployee} isPrivate />
        <Route
          exact
          path="/categories"
          component={ManageCategories}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
