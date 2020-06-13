import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import { BaseRoute, RouteToString } from '../types/route';
import { Home } from '../pages/home/home';
import { ThemeProvider, GlobalThemeStore } from '../ui/themes';
import { observer } from 'mobx-react';


// in case to extend more pages, just add more <Route> component, or put it in a loop
export const App: React.FC = observer(() => {
  return (
    <ThemeProvider value={GlobalThemeStore.get()}>
      <BrowserRouter>
        <Switch>
          <Route path={RouteToString({ route: BaseRoute.HOME })} exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
});
