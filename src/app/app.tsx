import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import { BaseRoute, RouteToString } from '../types/route';
import { Root } from '../pages/root/root';
import { About } from '../pages/about/about';


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RouteToString({ route: BaseRoute.ROOT })} exact component={Root}/>
        <Route path={RouteToString({ route: BaseRoute.ABOUT })} exact component={About}/>
      </Switch>
    </BrowserRouter>
  );
};
