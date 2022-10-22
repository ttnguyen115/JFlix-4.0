/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'assets/styles/libs.scss';
import { GlobalStyle } from 'styles/global-styles';

import { AppHeader, HelmetHeader, NotFoundPage } from './components';
import { HomePage } from './pages/HomePage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <HelmetHeader content="JFlix 4.0" />
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
