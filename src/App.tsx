import * as React from 'react'
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import ConverterComponent from './currency/Convereter/ConverterComponent';
import MenuComponent from './currency/Menu/MenuComponent';
import AboutComponent from './currency/About/AboutComponent';
import { useEffect } from 'react';
import rootStores from './BL/store';
import { HISTORY_STORE } from './BL/consts/stores';

const historyStore = rootStores[HISTORY_STORE];


function App() {

  const { geCurrencyTypesList } = historyStore;


  useEffect(() => {
    geCurrencyTypesList();
  }, []);



  return (
    <BrowserRouter>
        <MenuComponent />
    <Switch>
      <Route path="/about">
      <AboutComponent />
      </Route>
      <Route path="/">
      <ConverterComponent />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
