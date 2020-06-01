import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Speakers from "./pages/Speakers";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

ReactDOM.render(
    <div style={{ position: 'absolute', top: 0, width: '100%' }}>
    <Router>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
              key={location.key}
              timeout={300}
              classNames='fade'
          >
            <Switch location={location}>
              <Route component={Speakers} path="/Speakers" />
              <Route component={App} path="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Router>
    </div>, document.getElementById('root'));
