import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import { BaseRoute, RouteToString } from '../types/route';
import { HOME } from '../pages/home/home';

// in case to extend more pages, just add more <Route> component, or put it in a loop
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RouteToString({ route: BaseRoute.HOME })} exact component={HOME}/>
      </Switch>
    </BrowserRouter>
  );
};
