import React from 'react';
import Login from './componenets/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './componenets/maker/maker';

function App({FileInput, authService, cardRepository}) {
  return (
    <div className={styles.app}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login authService={authService}/>
      </Route>
      <Route path="/maker">
        <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
